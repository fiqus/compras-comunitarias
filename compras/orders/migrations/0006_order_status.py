# Generated by Django 3.0.11 on 2021-04-04 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_date_to_datetime_field_1447'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(default='await', max_length=64),
        ),
    ]
