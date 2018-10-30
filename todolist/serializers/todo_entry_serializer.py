from rest_framework import serializers

from todolist.models.todo_entry import TodoEntry

class TodoEntrySerializer(serializers.Serializer):
    class Meta:
        model  = TodoEntry
        fields = ('title', 'description', 'priority', 'deadline')