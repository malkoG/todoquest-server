from todolist.models import TodoEntry
from todolist.serializers import TodoEntrySerializer
from todolist.serializers import DeadlinedTodoEntrySerializer
from todolist.permissions import IsOwner

from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions

class TodoList(mixins.CreateModelMixin,
                mixins.ListModelMixin,
                generics.GenericAPIView):
    queryset         = TodoEntry.entries.all()
    serializer_class = TodoEntrySerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class Today(mixins.ListModelMixin,
                generics.GenericAPIView):
    queryset         = TodoEntry.remaining.all()
    serializer_class = DeadlinedTodoEntrySerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)