from rest_framework import serializers

from todolist.models.todo_entry import TodoEntry

# Detail View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스
class TodoEntrySerializer(serializers.Serializer):
    outdated = serializers.BooleanField()

    class Meta:
        model  = TodoEntry
        fields = ('id', 'title', 'completed', 'description', 'priority', 'deadline', 'outdated')

# List View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스
class MinimizedTodoEntrySerializer(serializers.Serializer):
    class Meta:
        model  = TodoEntry
        fields = ('id', 'title', 'completed', 'priority', 'deadline')

# Home View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스. Home View에서는 마감기한이 지난 TodoEntry를 별도로 표시해주는 기능이 있도록 추가적인 Field가 필요하다.
class DeadlinedTodoEntrySerializer(serializers.Serializer):
    outdated = serializers.BooleanField()

    class Meta:
        model  = TodoEntry
        fields = ('id', 'title', 'completed', 'priority', 'deadline', 'outdated')