# Generated by Django 5.0.6 on 2024-06-04 06:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_subverbo_moderators_story'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2024, 6, 4, 6, 59, 17, 785331, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]