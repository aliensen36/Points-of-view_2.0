from django.db import models

class Send_idea(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    email = models.EmailField()
    message = models.TextField(verbose_name="Сообщение")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    is_published = models.BooleanField(verbose_name="Подтверждаю отправку", default=True)

    def __str__(self):
        return self.name