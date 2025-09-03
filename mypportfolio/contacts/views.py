from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import HireRequestForm


def hire_me_view(request):
    if request.method == 'POST':
        form = HireRequestForm(request.POST)
        if form.is_valid():
            hire_request = form.save()

            # Email Notification
            send_mail(
                subject="New Hire Request Submitted",
                message=f"Service: {hire_request.get_service_display()}\n\nDescription:\n{hire_request.description}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=False,
            )

            return redirect('thank_you')  # Replace with your thank you page
    else:
        form = HireRequestForm()

    return render(request, 'contacts/hire_me.html', {'form': form})
