# Foxcam

The code in this repository was created at the [Hack with the Fantastic Four Meetup](https://www.meetup.com/de-DE/devops-stuttgart/events/252683739/).
Therefore, you shouldn't expect production ready code, but the sample app worked reasonably well and was a good prototype.

The idea was to spot a fox that was seen to stroll around the office using image recognition.

The repository contains the index.html that is a frontend that communicates with two serverless endpoints hosted on GCP, 
that either use the Google Vision API (gcp.js) or the AWS Rekognition API (aws.js).  