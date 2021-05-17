import React from 'react';
import { render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import App from './App';

//import fetchMock from 'jest-fetch-mock';
//fetchMock.enableMocks();
// beforeEach(() => {
//   fetchMock.once(JSON.stringify(mockData));
// });

describe('<App /> tests', () => {
  it ('renders <App />', () => {
    render (<App />);
  });
});

// omitted other codes
it ('renders <App />', async () => {
  render(<App />);
  // jest.setTimeout(15000); // 1 second
  //await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});