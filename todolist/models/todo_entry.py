from django.db import models

# Create your models here.
class TodoEntry(models.Model):
    """
    TodoEntry Model
    할 일 목록의 각 엔트리가 가지는 속성을 정의한다.
    """

    PRIORITIES = (
        ('S', '긴급'),
        ('A', '중요'),
        ('B', ''),
        ('C', ''),

    )

    title       = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed   = models.BooleanField(default=False)
    priority    = models.CharField(max_length=1, choices=PRIORITIES)
    