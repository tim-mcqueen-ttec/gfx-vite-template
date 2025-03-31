export interface HelloFunctionEvent {
  // Define the shape of the event object that the Hello function will receive.
  // This can be customized based on your requirements.
  message: string; 
}

export interface HelloFunctionResponse {
  // Define the shape of the response object that the Hello function will return.
  // This can be customized based on your requirements.
  greeting: string;
}