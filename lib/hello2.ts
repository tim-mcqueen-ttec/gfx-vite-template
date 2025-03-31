import { Context, Callback } from 'aws-lambda'; // Importing Context from aws-lambda for type definitions
import { HelloFunctionEvent, HelloFunctionResponse } from './types';

/**
 * Lambda function that returns a greeting message using a callback.
 * 
 * This function demonstrates how to create a simple Lambda function using a callback 
 * that can be exported and used in AWS Lambda.
 * 
 * @param event     The event object that contains the input message for the greeting. 
 *                  This should match the HelloFunctionEvent interface.
 * @param context   The context object provided by AWS Lambda, which contains information 
 *                  about the invocation, function, and execution environment.
 * @param callback  The callback function that is used to return the response. 
 *                  This is a standard way to handle asynchronous responses in AWS Lambda 
 *                  functions using callbacks.
 */
export function Hello2(event: HelloFunctionEvent, 
                       context: Context, 
                       callback: Callback<HelloFunctionResponse>): void
{
  // This function returns a greeting message using a callback instead of a Promise.
  // It's a simple example to demonstrate exporting a function with callback.

  const response: HelloFunctionResponse = {
    // Construct the greeting message using the message from the event object.
    greeting: `Hello, ${event.message || 'World'}!`
  };

  // Invoke the callback with the Error (if any) and the response object.
  callback(null, response);

  // Note: In a real-world scenario, you might want to handle errors and invoke 
  // the callback with an error if needed.
}