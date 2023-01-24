import logging

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS

from .models import WifiPassword
from .serializers import WifiPasswordSerializer, GetPasswordSerializer

logger = logging.getLogger("wifi_geslo")


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class WifiPasswordView(viewsets.ModelViewSet):
    """
    Endpoint returns latest wifi password from database
    """
    queryset = WifiPassword.objects.all()
    lookup_field = "ssid"
    permission_classes = [IsAuthenticated | ReadOnly]

    def get_serializer_class(self):
        if self.action in ["update", "create", "retrieve"]:
            return WifiPasswordSerializer
        return GetPasswordSerializer
