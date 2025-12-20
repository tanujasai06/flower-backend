pipeline {
    agent any

    stages {
        stage('Verify Docker') {
            steps {
                sh '''
                  docker version
                  docker ps
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t flower-backend .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                  docker rm -f flower-backend || true
                  docker run -d -p 3000:3000 --name flower-backend flower-backend
                '''
            }
        }
    }
}

