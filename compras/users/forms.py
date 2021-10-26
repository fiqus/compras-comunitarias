from django.contrib.auth import forms as admin_forms
from django import forms
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from allauth.account.forms import SignupForm

User = get_user_model()


class UserChangeForm(admin_forms.UserChangeForm):
    class Meta(admin_forms.UserChangeForm.Meta):
        model = User


class UserCreationForm(admin_forms.UserCreationForm):

    error_message = admin_forms.UserCreationForm.error_messages.update(
        {"duplicate_username": _("This username has already been taken.")}
    )

    class Meta(admin_forms.UserCreationForm.Meta):
        model = User

    def clean_username(self):
        username = self.cleaned_data["username"]

        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username

        raise ValidationError(self.error_messages["duplicate_username"])

class SimpleSignupForm(SignupForm):
    name = forms.CharField(max_length=255, label='Nombre y Apellido')
    dni = forms.CharField(max_length=255, label='DNI')
    tel = forms.CharField(max_length=255, label='Teléfono de contacto')
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.name = self.cleaned_data['name']
        user.dni = self.cleaned_data['dni']
        user.tel = self.cleaned_data['tel']
        user.save()
        return user
