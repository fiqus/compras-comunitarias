# Generated by Django 3.0.11 on 2021-10-26 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20210404_1531'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tel',
            field=models.CharField(blank=True, max_length=255, verbose_name='Telephone'),
        ),
    ]
