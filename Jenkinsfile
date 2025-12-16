pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t flower-backend .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop flower-backend || true
                docker rm flower-backend || true
                docker run -d -p 5000:5000 --name flower-backend flower-backend
                '''
            }
        }
    }
}
