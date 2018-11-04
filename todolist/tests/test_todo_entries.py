from datetime import datetime

from django.test import TestCase

from todolist.models.todo_entry import TodoEntry
# Create your tests here.

class TodoEntryTest(TestCase):

    # Todo List 초기화
    def setUp(self):
        TodoEntry.objects.create(title=u"장 보기")
        TodoEntry.objects.create(title=u"만화책 사기")
        TodoEntry.objects.create(title=u"과제 하기")
        TodoEntry.objects.create(title=u"네트워크 프로그래밍 공부")

    def test_how_many_todo(self):
        todos = TodoEntry.objects.all()
        self.assertEqual(len(todos), 4)


    def test_create_todo(self):
        deadline = datetime.strptime('2018-12-01 14:00:00', '%Y-%m-%d %H:%M:%S')
        todos = TodoEntry.objects.all()
        self.assertEqual(len(todos), 4)
        TodoEntry.objects.create(title=u"세미나 준비", description=u"엄청엄청엄청 중요한 세미나", priority='S', deadline=deadline)
        todos = TodoEntry.objects.all()
        self.assertEqual(len(todos), 5)