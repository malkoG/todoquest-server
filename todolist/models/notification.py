from django.contrib.auth.models import User
from django.db import models
from django.utils.timezone import now

CATEGORIES = (
    ('1', "마감기한이 지난 할일 목록"),
    ('2', "이벤트성 알림")
)

class Notification(models.Model):
    """
    Notification Model
    사용자에게 갈 수 있는 알림이 가지는 속성을 정의합니다.
    * category   : 어떤 종류의 알림인지 의미합니다.
    * detail     : 알림의 정확히 어떤 의미를 가지는지 의미합니다.
    * checked    : 사용자가 알림을 확인했는지를 의미합니다.
    """

    category   = models.CharField(max_length=1, choices=CATEGORIES) 
    detail     = models.TextField(blank=True)
    checked    = models.BooleanField(default=False)

    created_at  = models.DateTimeField(default=now)
    updated_at  = models.DateTimeField(default=now)

    owner       = models.ForeignKey(to=User, on_delete=models.CASCADE, default=1)