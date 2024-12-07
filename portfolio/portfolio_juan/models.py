from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 50, help_text ="Enter username", null=False)
    email = models.CharField(max_length = 100, unique=True, null=False)
    password = models.CharField(max_length = 55, null=False)
    
    def __str__(self):
        return self.nombre
    
    # Cambiar nombre de tabla
    class Meta:
        db_table = 'users'
        verbose_name = "User"
        verbose_name_plural = "Users"
        ordering = ["id"]

record = User(name="Juan", email="juanpablocaceres8@gmail.com", password="1234")


