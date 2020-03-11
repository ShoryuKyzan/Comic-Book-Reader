from rest_framework import serializers
from .models import Page

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = (
            'image',
            'order',
            'chapter',
            'is_non_chapter_page',
            'publish_date',
            'views'
        )
