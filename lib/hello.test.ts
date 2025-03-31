import { expect, jest, test } from '@jest/globals'; // Ensure Jest globals are available
import { HelloFunctionEvent, HelloFunctionResponse } from './types';
import { Hello } from './hello'; // Import the actual Hello function for testing
import { Context } from 'aws-lambda';



const context: Context = {
  functionName: 'helloFunction', // Mock the function name
  awsRequestId: 'mock-request-id', // Mock the AWS request ID
  getRemainingTimeInMillis: jest.fn(() => 300000), // Mock remaining time in milliseconds
  done: jest.fn(), // Mock done method
  fail: jest.fn(), // Mock fail method
  succeed: jest.fn(), // Mock succeed method
  callbackWaitsForEmptyEventLoop: true, // Default is true
  functionVersion: '$LATEST', // Mock the function version if needed
  invokedFunctionArn: 'arn:aws:lambda:us-west-2:123456789012:function:helloFunction', // Mock ARN of the invoked function
  logGroupName: '/aws/lambda/helloFunction', // Mock log group name
  memoryLimitInMB: '128', // Mock memory limit in MB for the Lambda function
  logStreamName: '2023/10/01/[$LATEST]abcdef1234567890abcdef1234567890', // Mock log stream name
  // clientContext: null, // Set to null or mock as needed for your tests
}; // Create a Mocked instance of the Context object

const message = 'Tested World'; // This is the message we will use to test the function

test('hello function should return expected response', async () => {
  
  // Arrange: Define the input event with a message
  const event: HelloFunctionEvent = { message };

  // Act: Call the hello function
  const response = await Hello(event, context);

  // Assert: Match the expected output to the real output
  expect(response).toEqual({ greeting: `Hello, ${message}!` });
});

test('hello function should return default greeting when no message is provided', async () => {
  // Arrange: Define the input event without a message
  const event: HelloFunctionEvent = {} as HelloFunctionEvent; // No message provided

  // Act: Call the hello function
  const response = await Hello(event, context);

  // Assert: Match the expected output to the real output
  expect(response).toEqual({ greeting: `Hello, World!` });
});