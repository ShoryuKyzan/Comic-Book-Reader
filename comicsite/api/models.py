from django.db import models

class Image(models.Model):
    name = models.CharField(max_length=100)
    uploaded = models.DateField()
    path = models.FilePathField()

class Series(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)  # XXX remove if unused

class Chapter(models.Model):
    name = models.CharField(max_length=100)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)
    coauthors = models.CharField(max_length=100) # XXX remove if unused

class Page(models.Model):
    image = models.ForeignKey(Image, on_delete=models.DO_NOTHING)
    order = models.IntegerField()
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    is_non_chapter_page = models.BooleanField()
    publish_date = models.DateField()
    views = models.IntegerField()


