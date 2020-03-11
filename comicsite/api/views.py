from .models import Page
from .serializers import PageSerializer
from rest_framework import generics

class PageListCreate(generics.ListCreateAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    