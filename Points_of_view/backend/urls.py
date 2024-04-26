from django.urls import path, include, re_path
from .views import SendIdeaListCreateView, SendIdeaDetailView

urlpatterns = [
    path('send_idea/', SendIdeaListCreateView.as_view(), name='send_idea_list_create'),
    path('send_idea/<int:id>/', SendIdeaDetailView.as_view(), name='send_idea_detail'),
    # path('cors/', csrf_exempt(include('corsheaders.urls'))),
    # re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

