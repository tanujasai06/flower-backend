pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker buildx create --use || true
                docker buildx build --load -t flower-backend .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f flower-backend || true
                docker run -d -p 5000:5000 --name flower-backend flower-backend
                '''
            }
        }
    }
}
