from rest_framework.serializers import ModelSerializer
from .models import Categorias, Productos, Marcas, Destacados


class CategoriasSerializer(ModelSerializer):
    class Meta:
        model = Categorias
        fields = '__all__'


class MarcasSerializer(ModelSerializer):
    class Meta:
        model = Marcas
        fields = '__all__'


class ProductosSerializer(ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'


class DestacadosSerializer(ModelSerializer):
    class Meta:
        model = Destacados
        fields = '__all__'
