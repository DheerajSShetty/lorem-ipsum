Lorem-Ipsum Generator:
This is lorem-ipsum generator which provides filler text based on WikiLeaks

Usage:
1)Clone the repo

2)Build the docker file: docker build -t loremepsum .

3)Run the docker: docker run -p80:80 -d -v $(pwd):/www/ --name vol-html loremepsum
  This mounts the local files onto docker folder
  


