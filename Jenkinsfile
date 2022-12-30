pipeline {
  agent { label "linux" }
  stages {
      stage("test"){
        try {
          sh """ npm test"""
        }
        catch (err){
          throw err
          return
        }

      }
      stage("setup") {
      steps {
        sh """
  docker ps -a \
    | awk '{ print \$1,\$2 }' \
    | grep webApp \
    | awk '{print \$1 }' \
    | xargs -I {} docker rm -f {}
  """
      }
    }
    stage("build") {
      steps {
        sh """
          docker build -t webApp .
        """
      }
    }
    stage("deploy") {
      steps {
        sh """
          docker run --rm webApp
        """
      }
    }
  }
}