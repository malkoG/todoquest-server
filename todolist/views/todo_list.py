from todolist.models import TodoEntry
from todolist.serializers import TodoEntrySerializer
from todolist.serializers import DeadlinedTodoEntrySerializer

from rest_framework import mixins
from rest_framework import generics

class TodoList(mixins.CreateModelMixin,
                generics.GenericAPIView):
    queryset         = TodoEntry.entries.all()
    serializer_class = TodoEntrySerializer

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