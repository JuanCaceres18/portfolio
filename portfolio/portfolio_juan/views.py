from django.shortcuts import render, redirect
from .forms import ContactForm

# Create your views here.
def home(request):
    return render(request, 'home.html')

def view_projects(request):
    return render(request, 'projects_all.html')

# Manejar formulario de contacto
def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save() # Guardo los datos en la ddbb 
            return redirect('success')
    
    else:
        form = ContactForm()
    
    return render(request, 'home.html', {'form': form})
