from django.shortcuts import render
from rest_framework import viewsets
from .models import Categorias, Productos, Marcas, Destacados
from .serializers import CategoriasSerializer, ProductosSerializer, MarcasSerializer, DestacadosSerializer
from rest_framework.decorators import action
# Create your views here.


class CategoriasView(viewsets.ModelViewSet):
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer


class MarcasView(viewsets.ModelViewSet):
    queryset = Marcas.objects.all()
    serializer_class = MarcasSerializer


class ProductosView(viewsets.ModelViewSet):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer


class DestacadosView(viewsets.ModelViewSet):
    queryset = Destacados.objects.all()
    serializer_class = DestacadosSerializer
