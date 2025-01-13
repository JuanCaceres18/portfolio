from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 50, help_text ="Enter username", null=False)
    email = models.CharField(max_length = 100, unique=True, null=False)
    phone = models.CharField(max_length = 55, null=False)
    
    def __str__(self):
        return f'{self.name} - {self.email} - {self.phone}'


