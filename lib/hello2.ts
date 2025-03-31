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

// Inline Tests

if (import.meta.vitest) {

  // Mocking the callback function to capture the result for assertion.
  // Note: The callback is mocked to avoid actual invocation and to test the result directly.
  // This allows us to check the result without needing to run the actual Lambda environment.
  // This is useful for testing purposes, especially when you want to isolate the function's behavior.
  // This approach helps in unit testing by allowing you to focus on the function's logic and output.
  const mockedCallback = vi.fn<Callback<HelloFunctionResponse>>(
    (
      error: string | Error | null | unknown,
      result: HelloFunctionResponse | undefined
    ) => {}
  );

  const { it, expect } = import.meta.vitest; // Importing vitest functions for inline testing
  it('Returns the correct greeting message', () => {
    // Arrange: Create a sample event object that matches the HelloFunctionEvent interface.
    const event: HelloFunctionEvent = { message: 'Vitest' };

    // The callback function is passed to the Hello2 function to handle the response.
    // This allows us to capture the result and perform assertions on it.
    // Act: Call the Hello2 function with the sample event and a callback to capture the result.
    Hello2(event, {} as Context, mockedCallback);

    // Assert: Check if the result matches the expected default greeting message.
    expect(mockedCallback).toHaveBeenCalledWith(
      null, // No error should be passed to the callback
      { greeting: 'Hello, Vitest!' } // The expected response object
    );
  });

  it('Returns default greeting when no message is provided', () => {
    // Arrange: Create a sample event object without a message to test the default behavior.
    const event = {} as HelloFunctionEvent; // No message provided, should default to 'World'

    // The callback function is passed to the Hello2 function to handle the response.
    // This allows us to capture the result and perform assertions on it.
    // Act: Call the Hello2 function with the sample event and a callback to capture the result.
    Hello2(event, {} as Context, mockedCallback);

    // Assert: Check if the result matches the expected default greeting message.
    expect(mockedCallback).toHaveBeenCalledWith(
      null, // No error should be passed to the callback
      { greeting: 'Hello, World!' } // The expected response object
    );
  });
}