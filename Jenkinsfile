pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        tool(name: 'NodeJS', type: 'nodejs')
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