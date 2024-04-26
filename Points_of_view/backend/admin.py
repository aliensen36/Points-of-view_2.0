from django.contrib import admin
from .models import Send_idea

class SendIdeaAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'created', 'is_published')
    list_filter = ('is_published', 'created')
    search_fields = ('name', 'phone', 'email')

admin.site.register(Send_idea, SendIdeaAdmin)


