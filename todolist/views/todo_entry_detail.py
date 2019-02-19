from todolist.models import TodoEntry
from todolist.serializers import TodoEntrySerializer
from todolist.permissions import IsOwner

from rest_framework import mixins
from rest_framework import generics

class TodoEntryDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView): 
    queryset = TodoEntry.entries.all()
    serializer_class = TodoEntrySerializer
    permission_classes = (IsOwner,)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)