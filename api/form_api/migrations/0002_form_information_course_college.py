# Generated by Django 4.2.4 on 2024-07-16 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='form_information',
            name='course_college',
            field=models.CharField(default='', max_length=255),
        ),
    ]
