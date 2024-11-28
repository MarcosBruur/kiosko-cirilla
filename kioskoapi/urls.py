from django.urls import path, include
from rest_framework import routers
from .views import CategoriasView, ProductosView, MarcasView, DestacadosView

router = routers.DefaultRouter()
router.register(r'categorias', CategoriasView)
router.register(r'marcas', MarcasView)
router.register(r'productos', ProductosView)
router.register(r'destacados', DestacadosView)


urlpatterns = [
    path('api/v1/', include(router.urls))
]
