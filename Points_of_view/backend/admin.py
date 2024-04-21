from django.contrib import admin
from .models import Send_idea, EnglishContent

class SendIdeaAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'created', 'is_published')
    list_filter = ('is_published', 'created')
    search_fields = ('name', 'phone', 'email')

class EnglishContentAdmin(admin.ModelAdmin):
    list_display = ('about', 'projects', 'works', 'team', 'contacts',
                    'hero_subtitle', 'hero_btn', 'who_subtitle', 'who_p1', 'who_p2',
                    'who_p3', 'projects_subtitle', 'projects_p1', 'projects_p2',
                    'team_subtitle', 'team_p1')
    search_fields = ('about', 'projects', 'works', 'team', 'contacts')
    readonly_fields = ('created',)

admin.site.register(Send_idea, SendIdeaAdmin)
admin.site.register(EnglishContent, EnglishContentAdmin)

