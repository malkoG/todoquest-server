from todolist.models import TodoEntry, Notification

unread_count = len(TodoEntry.entries.filter(completed=False))

notification = Notification(
    category='1',
    detail="지금까지 완료하지 않은 {} 개의 작업이 있습니다.".format(unread_count),
    checked=False
)

print("{} {} {}".format(notification.category, notification.detail, notification.checked))

notification.save()