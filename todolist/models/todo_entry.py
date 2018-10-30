from django.db import models

# Create your models here.
class TodoEntry(models.Model):
    """
    TodoEntry Model
    할 일 목록의 각 엔트리가 가지는 속성을 정의한다.
    * title : TodoEntry에서 제목을 의미한다.
    * description : TodoEntry에서 구체적으로 어떤 일을 할 것인지를 의미한다.
    * priority : TodoEntry에서 할 일의 우선순위를 의미한다.
    * completed : TodoEntry에서 할 일의 완료 여부를 의미한다.
    * deadline : TodoEntry에서 마감기한을 의미한다.
    """

    PRIORITIES = (
        ('S', '긴급'),
        ('A', '중요한 일'),
        ('B', '평범한 일'),
        ('C', '사소한 일'),
    )

    title       = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed   = models.BooleanField(default=False)
    priority    = models.CharField(max_length=1, choices=PRIORITIES, default='C')
    deadline    = models.DateTimeField(null=True, default=None)

    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)