from django.db import models

class HireRequest(models.Model):
    SERVICE_CHOICES = [
        ('web_dev', 'Web Development'),
        ('ai_bot', 'AI Chatbot'),
        ('seo', 'SEO Optimization'),
    ]

    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.service} - {self.created_at}"

# Create your models here.
