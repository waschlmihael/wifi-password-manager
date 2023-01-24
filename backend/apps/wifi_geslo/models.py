from django.db import models


class WifiPassword(models.Model):
    """
    Model store and encrypt password and add time when token was accessed
    """
    ssid = models.CharField(max_length=200, unique=True)
    wifi_password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    last_accessed = models.DateTimeField(auto_now=True)

    objects = models.Manager()

    def __str__(self):
        return self.ssid
