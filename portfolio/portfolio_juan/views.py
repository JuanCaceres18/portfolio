from django.shortcuts import render
from .models import User

# Create your views here.
def home(request):
    return render(request, 'home.html')

def view_projects(request):
    return render(request, 'projects_all.html')

# Manejar formulario de contacto
def contact_view(request):
    if request.method == "POST":
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        print(f"Received data: name={name}, email={email}, phone={phone}")

        # Valido que los datos no estén vacíos
        if name and email and phone:
            User.objects.create(name=name, email=email, phone=phone)
        else:
            print("Datos inválidos")
        return render(request, "home.html")
