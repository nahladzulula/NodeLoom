// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeLoom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeLoom/i);
    expect(titleElement).toBeInTheDocument();
});
