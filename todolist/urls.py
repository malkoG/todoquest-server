from django.urls import path
from .views import Today, TodoList, TodoEntryDetail, todo_complete, todo_incomplete

urlpatterns = [
    path('today', Today.as_view()),
    path('todo/<int:pk>', TodoEntryDetail.as_view()),
    path('todo/', TodoList.as_view()),
    path('todo/<int:pk>/complete', todo_complete),
    path('todo/<int:pk>/incomplete', todo_incomplete)
]