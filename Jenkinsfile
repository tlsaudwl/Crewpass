node {
	def app
	stage('Clone repository') {
		git 'https://github.com/smj20200998/Crewpass.git'
	}
	stage('Build image') {
		app = docker.build("tlsaudwl/opensource")
	}
	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}
}
