# Generated by Django 3.0.11 on 2021-04-04 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_date_to_datetime_field_1447'),
    ]

    operations = [
        migrations.AddField(
            model_name='listingproduct',
            name='stock',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
