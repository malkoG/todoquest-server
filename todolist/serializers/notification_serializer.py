from rest_framework import serializers

from todolist.models.notification import Notification, CATEGORIES

class NotificationSerializer(serializers.Serializer):
    id          = serializers.IntegerField(read_only=True)
    detail      = serializers.CharField()
    category    = serializers.ChoiceField(choices=CATEGORIES, default='1')
    checked     = serializers.BooleanField()
    created_at  = serializers.DateTimeField()

    class Meta:
        model  = Notification
        fields = ('id', 'detail', 'category', 'checked', 'created_at')