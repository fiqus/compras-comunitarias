from django.db import models
from sorl.thumbnail import ImageField


class Producer(models.Model):
    class Meta:
        verbose_name = "productor"
        verbose_name_plural = "productores"

    name = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    logo = ImageField(upload_to="producer_logos")

    def __str__(self):
        return f"{self.name}"


class Product(models.Model):
    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"

    producer = models.ForeignKey(Producer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = ImageField(upload_to="product_images")

    def __str__(self):
        return f"{self.name}"

#-----CREANDO TAGS H-S --------#
class Tags (models.Model):
    name = models.CharField(max_length=50)
    product = models.ManyToManyField(Product)


    def __str__(self):
        return f"{self.name}"

class Listing(models.Model):
    class Meta:
        verbose_name = "publicación"
        verbose_name_plural = "publicaciones"

    enabled = models.BooleanField(default=False)
    limit_date = models.DateTimeField()
    description = models.TextField()
    products = models.ManyToManyField(Product, through="ListingProduct")
  

    

    def __str__(self):
        return f"{self.limit_date}"


class ListingProduct(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(null=True)
    presentation = models.CharField(max_length=64)
    
    def tags(self):
        self.products[0].tags
    
    def __str__(self):
        return f"{self.product.name} {self.presentation}${self.price}"

class Order(models.Model):
    class Meta:
        verbose_name = "pedido"
        verbose_name_plural = "pedidos"

    user = models.ForeignKey(to="users.User", on_delete=models.CASCADE)
    listing = models.ForeignKey(to=Listing, on_delete=models.CASCADE)
    products = models.ManyToManyField(ListingProduct, through="OrderProduct")
  

    def __str__(self):
        return f"Orden - {self.user.name} - {self.listing.limit_date}"

    @property
    def total(self):
        return sum(p.total for p in self.orderproduct_set.all())


class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(ListingProduct, on_delete=models.CASCADE)
    amount = models.IntegerField()

    @property
    def total(self):
        return self.amount * self.product.price

    def __str__(self):
        return f"{self.product.product.name} {self.product.presentation} - {self.amount}"




