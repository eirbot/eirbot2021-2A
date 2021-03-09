./SonarQube/Serveur/bin/linux-x86-64/sonar.sh console &

./SonarQube/Analyze/bin/sonar-scanner   -Dsonar.projectKey=eirbot2021-2A   -Dsonar.sources=./code/   -Dsonar.host.url=http://localhost:9000   -Dsonar.login=4e1d56e01a0dba7070f17ef636ff4f10a4bfae4a

firefox http://localhost:9000/projects &
