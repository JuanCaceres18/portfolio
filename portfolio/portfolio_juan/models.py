from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 50, help_text ="Enter username")
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 55)


record = 

