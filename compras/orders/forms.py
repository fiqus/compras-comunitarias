from django import forms

class ListingSummaryForm(forms.Form):

    def form_action(self, listing):
        raise NotImplementedError()

class ListingRealTimeForm(forms.Form):

    def form_action(self, listing):
        raise NotImplementedError()