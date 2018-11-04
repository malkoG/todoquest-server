from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from todolist.models import Notification

@api_view(['PUT'])
def notification_check(request, pk):
    """
    해당되는 알림을 찾아서 확인한 상태로 바꾼다.
    """
    try:
        notification = Notification.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    notification.checked = True;
    notification.save()

    return Response(status=status.HTTP_200_OK)
