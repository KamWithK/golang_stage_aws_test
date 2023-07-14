#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestStage } from '../lib/test-stage';

const app = new cdk.App();

const testStage = new TestStage(app, 'testStage');
testStage.synth();

app.synth();
