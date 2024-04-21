from django.db import models
from django.utils import timezone



class Send_idea(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    email = models.EmailField()
    message = models.TextField(verbose_name="Сообщение")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    is_published = models.BooleanField(verbose_name="Подтверждаю отправку", default=True)

    def __str__(self):
        return self.name



class EnglishContent(models.Model):
    about = models.CharField(max_length=255, verbose_name="About us")
    projects = models.CharField(max_length=255, verbose_name="Projects")
    works = models.CharField(max_length=255, verbose_name="Works")
    team = models.CharField(max_length=255, verbose_name="Team")
    contacts = models.CharField(max_length=255, verbose_name="Contacts")
    hero_subtitle = models.TextField(verbose_name="Hero-subtitle")
    hero_btn = models.CharField(max_length=50, verbose_name="Hero_btn")
    who_subtitle = models.CharField(max_length=255, verbose_name="Who-subtitle")
    who_p1 = models.TextField(verbose_name="Who-p1")
    who_p2 = models.TextField(verbose_name="Who-p2")
    who_p3 = models.TextField(verbose_name="Who-p3")
    projects_subtitle = models.CharField(max_length=255, verbose_name="Projects-subtitle")
    projects_p1 = models.TextField(verbose_name="Projects-p1", default='')
    projects_p2 = models.TextField(verbose_name="Projects-p2")
    team_subtitle = models.CharField(max_length=255, verbose_name="Team-subtitle")
    team_p1 = models.TextField(verbose_name="Team-p1")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    is_published = models.BooleanField(verbose_name="Подтверждаю отправку", default=True)

    def __str__(self):
        return self.about

