from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from todolist.models import TodoEntry, Notification

@api_view(['GET'])
def scheduled_job(request):
    unread_count = len(TodoEntry.remaining.filter(outdated=True))

    notification = Notification(
        category='1',
        detail="지금까지 완료하지 않은 {} 개의 작업이 있습니다.".format(unread_count),
        checked=False
    )

    notification.save()
    return Response(status=status.HTTP_200_OK)