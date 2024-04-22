from django.urls import path, include, re_path
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

from . import views
from .views import SendIdeaListCreateView, SendIdeaDetailView, EnglishContentView, EnglishContentListCreateView, \
    EnglishContentRetrieveUpdateDestroyView

urlpatterns = [
    # path('', views.index_ru, name='index_ru'),
    # path('ru/', views.index_ru, name='index_ru'),
    # path('en/', views.index_en, name='index_en'),
    # path('fr/', views.index_fr, name='index_fr'),
    # path('success_ru/', views.success_ru, name='success_ru'),
    # path('success_en/', views.success_en, name='success_en'),
    # path('success_fr/', views.success_fr, name='success_fr'),
    path('send_idea/', SendIdeaListCreateView.as_view(), name='send_idea_list_create'),
    path('send_idea/<int:id>/', SendIdeaDetailView.as_view(), name='send_idea_detail'),
    # path('cors/', csrf_exempt(include('corsheaders.urls'))),
    # path('english-content/', EnglishContentView.as_view(), name='english-content'),
    path('english-content/', EnglishContentListCreateView.as_view(), name='english-content-list-create'),
    path('english-content/<int:pk>/', EnglishContentRetrieveUpdateDestroyView.as_view(), name='english-content-detail'),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

