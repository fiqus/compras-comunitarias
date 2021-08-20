# Generated by Django 3.0.11 on 2021-08-20 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0011_auto_20210819_1705'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='product',
        ),
        migrations.AddField(
            model_name='product',
            name='tag',
            field=models.ManyToManyField(to='orders.Tag'),
        ),
        migrations.AlterField(
            model_name='producer',
            name='url',
            field=models.URLField(blank=True),
        ),
    ]
