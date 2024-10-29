from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def view_projects(request):
    return render(request, 'projects_all.html')