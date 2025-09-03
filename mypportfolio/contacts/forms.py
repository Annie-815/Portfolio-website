from django import forms
from .models import HireRequest

class HireRequestForm(forms.ModelForm):
    class Meta:
        model = HireRequest
        fields = ['service', 'description']
        widgets = {
            'description': forms.Textarea(attrs={'placeholder': 'Tell me about your project...'}),
        }
