import { test, expect } from 'vitest'; // Importing vitest functions for testing

import { Hello } from './hello' // Importing the Hello function from hello.ts
import { 
  HelloFunctionEvent, 
  HelloFunctionResponse 
} from './types' // Importing the HelloFunctionEvent type for testing


test('Hello function returns the correct greeting message', async () => {
  // Arrange: Create a sample event object that matches the HelloFunctionEvent interface.
  const event: HelloFunctionEvent = { message: 'Vitest' };

  // Act: Call the Hello function with the sample event and an empty context object.
  const result = await Hello(event, {} as any); // Context is not used in this test, so we can pass an empty object.

  // Assert: Check if the result matches the expected greeting message.
  const expectedResponse: HelloFunctionResponse = { greeting: 'Hello, Vitest!' };
  
  expect(result).toEqual(expectedResponse);
});

test('Hello function returns default greeting when no message is provided', async () => {
  // Arrange: Create a sample event object without a message to test the default behavior.
  const event = {} as HelloFunctionEvent; // No message provided, should default to 'World'

  // Act: Call the Hello function with the sample event and an empty context object.
  const result = await Hello(event, {} as any); // Context is not used in this test, so we can pass an empty object.

  // Assert: Check if the result matches the expected default greeting message.
  const expectedResponse: HelloFunctionResponse = { greeting: 'Hello, World!' };
  
  expect(result).toEqual(expectedResponse);
});