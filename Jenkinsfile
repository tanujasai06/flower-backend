stage('Build Docker Image') {
    steps {
        sh '''
        docker buildx create --use || true
        docker buildx build --load -t flower-backend .
        '''
    }
}
