import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const header = screen.getByText('Patients List');
  expect(header).toBeInTheDocument();
});

test('renders add button', () => {
  render(<App />);
  const button = screen.getByText('Add patient');
  expect(button).toBeInTheDocument();
});

test('renders table', () => {
  render(<App />);
  const table = screen.queryByLabelText('table');
  expect(table).toBeInTheDocument();
});
