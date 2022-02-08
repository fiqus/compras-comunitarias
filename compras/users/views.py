from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView, RedirectView, UpdateView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate

import json

User = get_user_model()



# class UserDetailView(LoginRequiredMixin, DetailView):
#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, UpdateView):

    model = User
    fields = ["name", "dni"]

    def get_success_url(self):
        return reverse("orders:detail")


    def get_object(self):
        return User.objects.get(username=self.request.user.username)

    def form_valid(self, form):
        messages.add_message(
            self.request, messages.INFO, _("Infos successfully updated")
        )
        return super().form_valid(form)


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):

    permanent = False

    def get_redirect_url(self):
        return reverse("orders:detail")

class UserAuthentication(APIView):
    def post(self, request):
        data = json.loads(request.body)
        username = data["username"]
        password = data["password"]

        authenticated_user = authenticate(username=username, password=password)
        
        if authenticated_user is not None:
            token = Token.objects.get_or_create(user=authenticated_user)[0]
            data = {"token": str(token), }
            return Response(data, status=200)
        else:
            return Response(status=400)

user_redirect_view = UserRedirectView.as_view()
