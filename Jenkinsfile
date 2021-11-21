pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool 'NodeJS'
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