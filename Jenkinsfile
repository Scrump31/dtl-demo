pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool(name: 'nodejs', type: 'NodeJS')
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