# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-04 19:05
from __future__ import unicode_literals

import expenses.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0007_auto_20160904_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='time',
            field=models.TimeField(blank=True, default=expenses.models.current_time, null=True),
        ),
    ]
