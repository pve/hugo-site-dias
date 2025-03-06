# diginfra-website
Website www.digitalinfrastructures.nl

Place for the static version of this website. 

Editing through c9.io

Publishing through codeship.io using aws/codeship credentials
[ ![Codeship Status for pve/diginfra-website](https://codeship.com/projects/960fb5d0-4847-0133-c1d9-3a005a4221c8/status?branch=master)](https://codeship.com/projects/105261)

Delivery: S3 and CloudFront
http://staging-digitalinfra.nl.s3-website-us-east-1.amazonaws.com/publicaties/index.html

How to do this:
```
wget -mk --adjust-extension --no-host-directories http://www.digitalinfrastructures.nl 
git add *
git commit -m "initial upload" 
git push
```
Then you need a deployment service such as codeship.io that pulls this out of github and pushes it to S3
