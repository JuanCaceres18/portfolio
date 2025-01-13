from django.shortcuts import render
from .forms import ContactForm
from .models import User

# Create your views here.
def home(request):
    return render(request, 'home.html')

def view_projects(request):
    return render(request, 'projects_all.html')

# Manejar formulario de contacto
def contact_view(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        
        if name and email and phone:
            user = User.create(name=name, email=email, phone=phone)
            user.save()
    
    return render(request, "home.html")

