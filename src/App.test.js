import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';



describe('<App /> tests', () => {
  it('renders <App />', async () => {
    fetchMock.once(JSON.stringify({
      userId: 3,
      id: Math.floor(Math.random() * 100) + 1,
      title: 'Do Math Homework',
      completed: false
    })
  )
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  userEvent.type(screen.getByRole('textbox'), 'Do Math Homework');
  userEvent.click(screen.getByText(/Add new todo/i));
  await waitForElementToBeRemoved(() => screen.getByText(/saving/i))
  except(screen.getByText(/Do math Homework/i)).toBeInTheDocument();
  });
  
});