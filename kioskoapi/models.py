from django.db import models

# Create your models here.


class Categorias(models.Model):
    nombre = models.CharField(max_length=40, unique=True)
    imagen = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.nombre}"


class Marcas(models.Model):
    nombre = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return f"{self.nombre}"


class Productos(models.Model):
    nombre = models.CharField(max_length=30)
    cantidad = models.IntegerField(blank=True)
    descripcion = models.TextField(blank=True)
    categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE)
    marca = models.ForeignKey(Marcas, null=True, on_delete=models.SET_NULL)
    imagen = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.nombre} - {self.categoria} - {self.cantidad} - {self.marca}"


class Destacados(models.Model):
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.producto}"
