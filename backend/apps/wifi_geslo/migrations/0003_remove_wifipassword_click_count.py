# Generated by Django 4.0.6 on 2023-01-21 21:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wifi_geslo', '0002_alter_wifipassword_ssid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wifipassword',
            name='click_count',
        ),
    ]
