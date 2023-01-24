from rest_framework.routers import SimpleRouter

from .views import WifiPasswordView

router = SimpleRouter()
router.register(r"ssids", WifiPasswordView, basename="WifiPassword")
# router.register(r"latest_password", WifiPasswordView, basename="LatestWifiPassword")

urlpatterns = [
]

urlpatterns += router.urls
