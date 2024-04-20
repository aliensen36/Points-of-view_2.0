from django.contrib import admin
from .models import Send_idea, EnglishContent

class SendIdeaAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'created', 'is_published')  # Поля, отображаемые в списке
    list_filter = ('is_published', 'created')  # Фильтры на странице списка
    search_fields = ('name', 'phone', 'email')  # Поля, по которым можно проводить поиск

class EnglishContentAdmin(admin.ModelAdmin):
    list_display = ('about', 'projects', 'works', 'team', 'contacts')  # Поля, отображаемые в списке
    search_fields = ('about', 'projects', 'works')  # Поля, по которым можно проводить поиск

admin.site.register(Send_idea, SendIdeaAdmin)
admin.site.register(EnglishContent, EnglishContentAdmin)

