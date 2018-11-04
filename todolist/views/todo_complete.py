from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from todolist.models import TodoEntry

@api_view(['PUT'])
def todo_complete(request, pk):
    """
    해당되는 Todo Entry를 찾아서 완료상태로 바꿉니다.
    """
    try:
        todo = TodoEntry.entries.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    todo.completed = True
    todo.save()
    return Response(status=status.HTTP_200_OK)

@api_view(['PUT'])
def todo_incomplete(request, pk):
    """
    해당되는 Todo Entry를 찾아서 미완료상태로 바꿉니다.
    """
    try:
        todo = TodoEntry.entries.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    todo.completed = False
    todo.save()
    return Response(status=status.HTTP_200_OK)