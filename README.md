Lorem-Ipsum Generator:
This is lorem-ipsum generator which provides filler text based on WikiLeaks

Usage:

To run on local docker

1)Clone the repo

2)Build the docker file: docker build -t loremepsum .

3)Run the docker: docker run -p80:80 -d -v $(pwd):/www/ --name vol-html loremepsum
  This mounts the local files onto docker folder
  
To run on AWS

1)Expo port 80 in docker file

2)Dockerrun.aws.json file is required to run docker on AWS

3)Perform eb init, eb create and eb deploy
  
4)Use eb status to monitor the deployment and to obtain the url

