from django.contrib.auth.models import User

from django.db import models
from django.db.models import Case, Value, When
from django.db.models.functions import Now

from django.utils.timezone import now

PRIORITIES = (
    ('1', '긴급'),
    ('2', '중요한 일'),
    ('3', '평범한 일'),
    ('4', '사소한 일'),
)

# 완료한 작업을 제외한 모든 Todo Entry에 대한 질의를 수행
class RemainingTodoManager(models.Manager):
    def get_queryset(self):
        return super(RemainingTodoManager, self) \
            .get_queryset() \
            .filter(completed=False) \
            .annotate(outdated=Case(
                # deadline 필드가 NULL이 아니면서, 
                # 현재 시간보다 적으면 기한이 지났다고 표시
                When(deadline__isnull=False, 
                    deadline__lte=Now(), 
                    then=Value(True)),
                default=Value(False),
                output_field=models.BooleanField()
            ) )

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

    * owner    : 사용자 계정
    """

    title       = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    completed   = models.BooleanField(default=False)
    priority    = models.CharField(max_length=1, choices=PRIORITIES, default='3')
    deadline    = models.DateTimeField(null=True, default=None)

    created_at  = models.DateTimeField(default=now)
    updated_at  = models.DateTimeField(default=now)

    owner       = models.ForeignKey(to=User, on_delete=models.CASCADE, default=1)

    # Query Set 정의

    entries     = models.Manager()
    remaining   = RemainingTodoManager()