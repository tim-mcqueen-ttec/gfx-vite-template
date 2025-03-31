import { Context } from 'aws-lambda'; // Importing Context from aws-lambda for type definitions
import { HelloFunctionEvent, HelloFunctionResponse } from './types';

/**
 * Lambda function that returns a greeting message based on the input event.
 * 
 * This function demonstrates how to create a simple Lambda function that can be exported and used in AWS Lambda.
 * 
 * This should match the HelloFunctionEvent interface.
 * @param event The event object that contains the input message for the greeting. 
 * @param context The context object provided by AWS Lambda, which contains information 
 *                about the invocation, function, and execution environment.
 * 
 * @returns {Promise<HelloFunctionResponse>} A promise that resolves to a HelloFunctionResponse object 
 *                                           containing the greeting message.
 */
export const Hello = (event: HelloFunctionEvent, context: Context) => 
  new Promise<HelloFunctionResponse>((resolve, reject) => {
    // This function returns a greeting message.
    // It's a simple example to demonstrate exporting a function.
    resolve({
      // Construct the greeting message using the message from the event object.
      greeting: `Hello, ${event.message || 'World'}!` 
    });
    // Note: In a real-world scenario, you might want to handle errors and reject the promise if needed.
  });