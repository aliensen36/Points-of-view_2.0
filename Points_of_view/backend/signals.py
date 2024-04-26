from email.utils import formataddr
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .models import Send_idea
import pytz
from django.utils import timezone


@receiver(post_save, sender=Send_idea)
def send_idea_notification(sender, instance, created, **kwargs):
    if created:
        timezone.activate(pytz.timezone('Europe/Moscow'))
        subject = 'New message from your website'
        message = f'''
        A message has been sent to you from your website 
        from {instance.name} ({instance.phone}, {instance.email}).

        Message: {instance.message}

        Created: {instance.created.strftime("%d %B %Y г. %H:%M")}
        '''
        from_email = formataddr(('Точки зрения', 'ivanochka.ivanoff@yandex.ru'))
        recipient_list = ['tochkizreniya@inbox.ru']
        html_message = render_to_string('email.html', {'instance': instance})
        send_mail(subject, message, from_email, recipient_list, html_message=html_message)
