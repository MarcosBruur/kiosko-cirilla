# Generated by Django 5.1.3 on 2024-11-16 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kioskoapi', '0005_productos_marca'),
    ]

    operations = [
        migrations.AddField(
            model_name='productos',
            name='imagen',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
