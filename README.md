# TODO QUEST

## Environment

* Python 3.6
* Django 2.1
* Pipenv
* MongoDB

### Installation

> Ubuntu 기준으로 작성한 메뉴얼입니다.

#### Installing Django
1. Pyenv 설치에 필요한 빌드 패키지들을 설치한다.
```sh
$ sudo apt-get install build-essential ncurses-dev libncurses5-dev gettext autoconf cmake automake libevent-dev zlib1g-dev libbz2-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev pkg-config
```

2. Pyenv를 설치한다.
```sh
$ curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
```

3. Pyenv 관련 환경설정을 해주고, 쉘을 다시 킨다.
```sh
$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
$  echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile
$ exec "$SHELL"
```

4. Python 3.6을 설치한다.
```
$ pyenv install 3.6
$ pyenv global 3.6
```

5. Pipenv를 설치한다.
```sh
$ curl https://raw.githubusercontent.com/kennethreitz/pipenv/master/get-pipenv.py | python
```

6. 프로젝트의 디렉토리로 이동 후 Pipenv를 이용하여 가상환경 셀을 킨다.
```sh
$ cd $PROJECT_DIR
$ pipenv shell
```

7. 가상환경에서 의존성 패키지들을 설치한다.
```sh
$ pipenv install
```

#### installing Mongo DB

1. Mongo DB 를 설치한다.
```sh
$ apt-get install mongodb-clients mongodb-server
$ mongo --version
MongoDB shell version: 2.4.9
$ mongod --version
db version v2.4.9
Mon Dec 21 09:54:19.148 git version: nogitversion
```

2. Mongo DB 서비스를 시작한다.
```sh
$ etc/init.d/mongodb status
 * Checking status of database mongodb                                              [fail]
$ etc/init.d/mongodb start
 * Starting database mongodb                                                        [ OK ]
```

### Executing Appication 
1. 서버를 시작하기 전에 DB 초기화를 위해 마이그레이션을 한다.
```sh
$ python manage.py migrate
```

2. 실행에 필요한 모든 패키지도 설치했고, MongoDB도 설정완료했으니, 서버를 시작한다.
```sh
$ python manage.py runserver
```

## Requirements

* [x] 새로운 TODO(제목 + 내용)를 작성한다
    * POST /api/todo/
* [x] 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
    * POST /api/todo/
* [x] 우선순위를 조절할 수 있다.
    * POST /api/todo/
    * PUT  /api/todo/:id
* [x] 완료 처리를 할 수 있다.(혹은 미완료처리)
    * PUT  /api/todo/:id
    * PUT  /api/todo/:id/complete
    * PUT  /api/todo/:id/incomplete
* [x] 마감기한이 지난 TODO에 대해 알림을 노출한다.
    * 알림은 매 시간 10분마다 생성되며, 외부 프로세스에서의 HTTP GET 요청을 처리할때만 알림이 생성된다.
        * 프로덕션 환경에서는 crontab에 `10 * * * * curl -X GET /api/scheduled_job` task를 추가하였다.
    * GET  /api/notifications
* [x] TODO 목록을 볼 수 있다.
    * GET  /api/todo/
* [x] TODO 내용을 수정할 수 있다.
    * PUT  /api/todo/:id
* [x] TODO 항목을 삭제할 수 있다.
    * DELETE /api/todo/:id

### Additional Feature
* [ ] 할 일에 대해 메모를 남길 수 있는 댓글 기능
* [ ] 할 일에 대한 분류 기능
* [ ] 표시되는 순서의 전환


## Reference

* DRF를 이용한 TDD : https://realpython.com/test-driven-development-of-a-django-restful-api/