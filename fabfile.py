from fabric.api import task
from fabric.api import cd
from fabric.api import env
from fabric.api import run
from fabric.api import local

env.use_ssh_config = True
env.forward_agent = True
env.port = '22222'
env.user = 'root'
env.hosts = ['sechszueins.vorwaerts-werbung.de']
env.webserver = '/opt/webserver/buildout.webserver'
env.code_root = '/opt/www/konze'
env.sitename = 'konze'
env.code_user = 'root'
env.prod_user = 'www'


@task
def deploy():
    """ Deploy current master to production server """
    local('git push')
    with cd(env.code_root):
        run('nice git pull')
