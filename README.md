# TODO QUEST

## Environment

* Python 3.6
* Django 2.1
* Pipenv
* PostgreSQL

### Installation

> Ubuntu 기준으로 작성한 메뉴얼입니다.

#### Installing Django
1. Pyenv 설치에 필요한 빌드 패키지들을 설치한다.

2. Pyenv를 설치한다.

3. Python 3.6을 설치한다.
```
pyenv install 3.6
pyenv global 3.6
```
3. Pipenv를 설치한다.
```sh

```
4. Pipenv를 이용하여 가상환경 셀을 킨다.
```sh
pipenv shell
```
5. 가상환경에서 의존성 패키지들을 설치한다.
```sh
pipenv install
```

#### Installing PostgreSQL

> 


#### Test

각 Feature가 잘 동작하는지 테스트하려면 다음의 명령어를 입력하시면 됩니다.

```sh
python manage.py test
```

## Requirements

* [v] 새로운 TODO(제목 + 내용)를 작성한다
* [v] 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
* [v] 우선순위를 조절할 수 있다.
* [v] 완료 처리를 할 수 있다.
* [ ] 마감기한이 지난 TODO에 대해 알림을 노출한다.
* [v] TODO 목록을 볼 수 있다.
* [v] TODO 내용을 수정할 수 있다.
* [v] TODO 항목을 삭제할 수 있다.

### Additional Feature

* [ ] 할 일에 대해 메모를 남길 수 있는 댓글 기능
* [ ] 할 일에 대한 분류 기능
* [ ] 표시되는 순서의 전환

## 

## Reference

* DRF를 이용한 TDD : https://realpython.com/test-driven-development-of-a-django-restful-api/