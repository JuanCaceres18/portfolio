from django import forms
from .models import User

class ContactForm(forms.Form):
    class Meta:
        model = User
        fields = ["name", "email", "phone"] # Campos del formulario
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Tu nombre'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Tu email'}),
            'phone': forms.TextInput(attrs={'placeholder': 'Tu teléfono'}),
        }