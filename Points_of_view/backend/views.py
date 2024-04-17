from django.shortcuts import render, redirect
from .forms import Send_idea_rutForm, Send_idea_entForm, Send_idea_frtForm


def index_ru(request):
    if request.method == 'POST':
        form = Send_idea_rutForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            form = form.save(commit=False)
            form.save()
            return redirect('success_ru')
    else:
        form = Send_idea_rutForm()
    return render(request, 'index_ru.html', {'form': form})

def index_en(request):
    if request.method == 'POST':
        form = Send_idea_entForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            form = form.save(commit=False)
            form.save()
            return redirect('success_en')
    else:
        form = Send_idea_entForm()
    return render(request, 'index_en.html', {'form': form})


def index_fr(request):
    if request.method == 'POST':
        form = Send_idea_frtForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            form = form.save(commit=False)
            form.save()
            return redirect('success_fr')
    else:
        form = Send_idea_frtForm()
    return render(request, 'index_fr.html', {'form': form})


def success_ru(request):
    return render(request, 'success_ru.html')

def success_en(request):
    return render(request, 'success_en.html')

def success_fr(request):
    return render(request, 'success_fr.html')