from django import forms
from .models import Send_idea


class Send_idea_rutForm(forms.ModelForm):
    class Meta:
        model = Send_idea
        fields = ['name', 'phone', 'email', 'message']
        labels = {'name': 'Ваше имя', 'phone': 'Телефон', 'email': 'Электронная почта', 'message': 'Ваше сообщение'}


class Send_idea_entForm(forms.ModelForm):
    class Meta:
        model = Send_idea
        fields = ['name', 'phone', 'email', 'message']
        labels = {'name': 'Your name', 'phone': 'Phone', 'email': 'E-mail', 'message': 'Your message'}


class Send_idea_frtForm(forms.ModelForm):
    class Meta:
        model = Send_idea
        fields = ['name', 'phone', 'email', 'message']
        labels = {'name': 'Votre nom', 'phone': 'Téléphone', 'email': 'E-mail', 'message': 'Votre message'}
