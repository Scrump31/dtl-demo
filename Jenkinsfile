pipeline {
  agent any
   tools {
    nodejs "node14.18.0"
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

  }
}
