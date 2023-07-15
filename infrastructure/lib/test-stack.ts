import { GoFunction } from '@aws-cdk/aws-lambda-go-alpha';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import path = require('path');

export class TestStack extends Stack {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const testFunction = new GoFunction(this, 'testFunction', {
            entry: path.join(__dirname, '../../functions/test'),
            functionName: 'testFunction',
        });
    }
}
