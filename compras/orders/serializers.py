from rest_framework import serializers
from .models import *


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = ('id', 'name', 'description','url','logo')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description','created_at')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name', 'image')

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'name', 'description','enabled','products')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'name')

class ListingProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListingProduct
        fields = ('id', 'listing', 'product','price','presentation')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model: Product
        fields = ('id', '')