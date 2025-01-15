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
        print(f"Received data: name={name}, email={email}, phone={phone}")
        User.objects.create(name=name, email=email, phone=phone)
        return render(request, "contact_success.html")
        
    return render(request, "home.html") # Renderizo el home si el método no es POST

