# Template Lambda

Typescript/Node template for AWS Lambda that deploys with AWS SAM using Github Actions

### Prerequisites

* IAM User with the following policies 
```
IAMFullAccess
AmazonEC2ContainerRegistryFullAccess
AmazonS3FullAccess
AmazonAPIGatewayAdministrator
AWSCloudFormationFullAccess
AWSLambda_FullAccess
```
* ECR repository to house the lambda docker images.
  See [How to create a ECR repository](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html)

### Configuration

Here are the following Github Secrets you should define for this repository:

`AWS_ACCESS_KEY_ID` IAM access key ID.

`AWS_SECRET_ACCESS_KEY` IAM access key

`AWS_REGION` Deployment region

`ECR_REPO_URL` URI of the ECR repository. The repository must be in the same region as Deployment region 


### Development

Install dependencies
```
npm i
```

running tests
```
npm test
```
