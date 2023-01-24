import logging

from django.contrib.auth.models import User
from rest_framework import serializers

from .models import WifiPassword

logger = logging.getLogger("wifi_geslo")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "is_superuser", "username", "is_staff", "is_active")


class GetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = WifiPassword
        fields = ("ssid",)


class WifiPasswordSerializer(serializers.ModelSerializer):
    """
    Serializer password object
    """
    ssid = serializers.CharField(max_length=50, required=True)
    wifi_password = serializers.CharField(max_length=100, required=True)

    class Meta:
        model = WifiPassword
        fields = "__all__"

    def create(self, validated_data):
        obj, created = WifiPassword.objects.update_or_create(
            ssid=validated_data["ssid"],
            defaults={
                "wifi_password": validated_data["wifi_password"]
            }
        )
        logger.info(f"Password for SSID {validated_data['ssid']} is added to the database")
        return obj
