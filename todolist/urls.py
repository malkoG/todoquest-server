from django.urls import path
from .views import Today, TodoList, TodoEntryDetail

urlpatterns = [
    path('today', Today.as_view()),
    path('todo/<int:pk>', TodoEntryDetail.as_view()),
    path('todo/', TodoList.as_view())
]