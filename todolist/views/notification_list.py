from todolist.models import Notification
from todolist.serializers import NotificationSerializer
from todolist.permissions import IsOwner

from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions

class NotificationList(mixins.CreateModelMixin,
                mixins.ListModelMixin,
                generics.GenericAPIView):
    queryset           = Notification.objects.all().filter(checked=False).order_by('-created_at')
    serializer_class   = NotificationSerializer
    permission_classes = (IsOwner,)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)