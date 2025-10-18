import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DFU restore guide title', () => {
  render(<App />);
  const titleElement = screen.getByText(/MacBook Pro M2 DFU Restore Guide/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders first step', () => {
  render(<App />);
  const stepElement = screen.getByText(/What You Need/i);
  expect(stepElement).toBeInTheDocument();
});

test('renders navigation buttons', () => {
  render(<App />);
  const previousButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);
  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test('renders language toggle button', () => {
  render(<App />);
  const languageButton = screen.getByText(/Tiếng Việt/i);
  expect(languageButton).toBeInTheDocument();
});
