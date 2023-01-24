from django.contrib import admin

from .models import WifiPassword

class WifiPasswordAdmin(admin.ModelAdmin):
    pass

admin.site.register(WifiPassword, WifiPasswordAdmin)
