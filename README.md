Simple example of using the TypeScript CDK with Golang and Stages
Eventually should work both on AWS and with LocalStack
There are currently bugs which prevent it from being fully functional

# Instructions
## Setup
1. `cd infrastructure`
2. `npm install`
3. `cdk synth`
4. `cdk bootstrap`
5. `cdk deploy -a "cdk.out/assembly-testStage/" --require-approval "never" --all`

## Test
Get function information:
`aws lambda get-function --function-name "testFunction"`

Invoke function:
`aws lambda invoke --function-name "testFunction" "manual_test.json"`
