# Generated by Django 5.1.4 on 2025-01-16 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_juan', '0003_rename_password_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=100),
        ),
    ]
