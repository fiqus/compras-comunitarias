from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string



class EmailSender:
    SUPPORT_EMAIL = 'compras@comunitarias.coop'

    def __init__(self, email_type, email_data) -> None:
        self._email_type = email_type
        self._email_data = email_data
        self._from_email = self._email_data['from']
        self._to_email = self._email_data['to']

    def send_email(self):
        text_content = ''
        html_content = self._prepare_html_content()
        msg = EmailMultiAlternatives(self._email_type.subject, text_content, self._from_email, [self._to_email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

    def _prepare_html_content(self):
        return render_to_string(
            self._email_type.template, 
            {
                'user_name': self._email_data['user_name'],
                'listing_name': self._email_data['listing_name'], 
                'limit_date': self._email_data['limit_date'],
                'order_products': self._email_data['order_products'],
                'order_total': self._email_data['order_total'],
                'support_email': self.SUPPORT_EMAIL
            }
        )