from django.db import models
from sorl.thumbnail import ImageField
import pandas as pd
from django_pandas.io import read_frame


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
class Tag (models.Model):
    name = models.CharField(max_length=50)
    product = models.ManyToManyField(Product)
    image = ImageField(default="null", verbose_name="Tag Image",upload_to="tag_image", blank="True")


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

    @property
    def summary(self):
        df = pd.DataFrame()
        query_set = self.order_set.all()
        if query_set:
            for order in query_set:
                products = []
                for product in order.orderproduct_set.all():
                    p = {}
                    p["product"] = str(product.product)
                    p["order"] = str(product.order)
                    p["amount"] = int(product.amount)
                    p["total"] = float(product.total)
                    products.append(p)
                f = pd.DataFrame(products)
                df = df.append(f, ignore_index=True)
            df = df.groupby('product').sum()
            df.loc['Total']= df.sum()
        return df

    @property
    def products_list(self):
        products = []
        for order in self.order_set.all():
            for product in order.orderproduct_set.all():
                p = {}
                p["product"] = product.product
                p["price"] = product.total
                p["order"] = product.order
                p["amount"] = int(product.amount)
                p["total"] = float(product.total)
                products.append(p)

        return products

    @property
    def products_by_order(self):
        products_by_order = []
        i = 0

        for order in self.order_set.all():
            o = {
                "id": i,
                "pk": order.pk,
                "name": order.user.name,
                "dni": order.user.dni,
                "price": order.total,
                "status": order.status,
                "children": []
            }
            i += 1
            for product in order.orderproduct_set.all():
                p = {
                    "id": i,
                    "name": order.user.name,
                    "product": str(product.product),
                    "price": float(product.total),
                    "quantity": product.amount,
                    "status": "unchecked"
                }
                i += 1
                o["children"].append(p)
            products_by_order.append(o)

        return products_by_order

    @property
    def users(self):
        query_set = self.order_set.all()
        if query_set:
            users = []
            for order in query_set:
                user = order.user
                object_user = {
                    "name": user.name,
                    "dni": user.dni,
                    "email": user.email,
                }
                users.append(object_user)

        return users

    def __str__(self):
        return f"{self.limit_date}"


class ListingProduct(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    presentation = models.CharField(max_length=64)

    def tag(self):
        self.products[0].tag


    def __str__(self):
        return f"{self.product.name} ({self.presentation})"

class Order(models.Model):
    class Meta:
        verbose_name = "pedido"
        verbose_name_plural = "pedidos"

    user = models.ForeignKey(to="users.User", on_delete=models.CASCADE)
    listing = models.ForeignKey(to=Listing, on_delete=models.CASCADE)
    products = models.ManyToManyField(ListingProduct, through="OrderProduct")
    status = models.CharField(max_length=64, default="await")


    def __str__(self):
        return f"Orden - {self.user.name} - {self.listing.limit_date}"

    @property
    def total(self):
        total = sum(p.total for p in self.orderproduct_set.all())
        return total


class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(ListingProduct, on_delete=models.CASCADE)
    amount = models.IntegerField()

    @property
    def total(self):
        return self.amount * self.product.price

    def __str__(self):
        return f"{self.product.product.name} {self.product.presentation} - {self.amount}"




