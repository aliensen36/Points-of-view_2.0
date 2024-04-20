from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from . import views
from .views import SendIdeaListCreateView, SendIdeaDetailView, EnglishContentView

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
    path('english-content/', EnglishContentView.as_view(), name='english-content'),
]
