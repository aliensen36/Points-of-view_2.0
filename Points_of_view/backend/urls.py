from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_ru, name='index_ru'),
    path('ru/', views.index_ru, name='index_ru'),
    path('en/', views.index_en, name='index_en'),
    path('fr/', views.index_fr, name='index_fr'),
    path('success_ru/', views.success_ru, name='success_ru'),
    path('success_en/', views.success_en, name='success_en'),
    path('success_fr/', views.success_fr, name='success_fr'),
]