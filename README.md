# Instructions
## Setup
1. `cd infrastructure`
2. `npm install`
3. `cdk synth`
4. `cdklocal bootstrap`
5. `cdklocal deploy --require-approval "never"`

## Test
Get function information:
`awslocal lambda get-function --function-name "testFunction"`

Invoke function:
`awslocal lambda invoke --function-name "testFunction" "manual_test.json"`
