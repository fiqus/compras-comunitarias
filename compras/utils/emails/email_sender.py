from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string



class EmailSender:
    SUPPORT_EMAIL = 'compras@comunitarias.coop'

    def __init__(self, email_type, from_email, to_email, email_data) -> None:
        self._email_type = email_type
        self._from_email = from_email
        self._to_email = to_email
        self._email_data = email_data

    def send_email(self):
        text_content = ''
        html_content = self._prepare_html_content()
        msg = EmailMultiAlternatives(self._email_type.subject, text_content, self._from_email, [self._to_email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

    def _prepare_html_content(self):
        return render_to_string(
            self._email_type.template, 
            self._email_data
        )