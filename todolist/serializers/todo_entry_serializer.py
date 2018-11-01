from rest_framework import serializers

from todolist.models.todo_entry import TodoEntry, PRIORITIES

# Detail View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스
class TodoEntrySerializer(serializers.Serializer):
    id          = serializers.IntegerField(read_only=True)
    title       = serializers.CharField(required=True, max_length=255)
    description = serializers.CharField()
    completed   = serializers.BooleanField()
    priority    = serializers.ChoiceField(choices=PRIORITIES, default='3')
    deadline    = serializers.DateTimeField(default=None)

    class Meta:
        model  = TodoEntry
        fields = ('id', 'title', 'completed', 'description', 'priority', 'deadline')

# List View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스
class MinimizedTodoEntrySerializer(serializers.Serializer):
    id        = serializers.IntegerField(read_only=True)
    title     = serializers.CharField(required=True, max_length=255)
    completed = serializers.BooleanField()
    priority  = serializers.ChoiceField(choices=PRIORITIES, default='3')
    deadline  = serializers.DateTimeField(default=None)

    class Meta:
        model  = TodoEntry
        fields = ('id', 'title', 'completed', 'priority', 'deadline')

# Home View에서 보여지는 TodoEntry를 어떻게 직렬화할 것인지 나타내는 클래스. Home View에서는 마감기한이 지난 TodoEntry를 별도로 표시해주는 기능이 있도록 추가적인 Field가 필요하다.
class DeadlinedTodoEntrySerializer(serializers.Serializer):
    id        = serializers.IntegerField(read_only=True)
    title     = serializers.CharField(required=True, max_length=255)
    completed = serializers.BooleanField()
    priority  = serializers.ChoiceField(choices=PRIORITIES, default='3')
    deadline  = serializers.DateTimeField(default=None)

    outdated = serializers.BooleanField(read_only=True)

    class Meta:
        model  = TodoEntry
        fields = ('pk', 'title', 'completed', 'priority', 'deadline', 'outdated')