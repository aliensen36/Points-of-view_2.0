from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import Send_idea


@receiver(post_save, sender=Send_idea)
def send_idea_notification(sender, instance, created, **kwargs):
    if created:
        subject = 'New message from your website'
        message = f'''
        Name: {instance.name}
        Phone: {instance.phone}
        Email: {instance.email}
        Message: {instance.message}
        Created: {instance.created}
        '''
        from_email = 'ivanochka.ivanoff@yandex.ru'  # Отправитель
        to_email = 'aliensen@mail.ru'  # Адрес электронной почты администратора

        send_mail(subject, message, from_email, [to_email])
