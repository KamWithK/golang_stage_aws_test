import { Construct } from 'constructs';
import { Stage } from 'aws-cdk-lib';
import { TestStack } from './test-stack';

export class TestStage extends Stage {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const testStack = new TestStack(this, 'testStack');
    }
}
