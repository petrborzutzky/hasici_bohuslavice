import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Reset document class
    document.documentElement.className = '';
  });

  test('renders the correct icon based on initial state', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // Initially, the dark mode should be off, so the MoonIcon should be visible
    expect(button).toContain(screen.getByTestId('moon-icon'));
    expect(button).not.toContain(screen.getByTestId('sun-icon'));
  });

  test('toggles dark mode when button is clicked', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // Click the button to enable dark mode
    fireEvent.click(button);

    // After the click, the SunIcon should be visible
    expect(button).toContain(screen.getByTestId('moon-icon'));
    expect(button).not.toContain(screen.getByTestId('sun-icon'));

    // The 'dark' class should be added to document.documentElement
    expect(document.documentElement.classList).toContain('dark');

    // Check if localStorage has been updated
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  test('correctly reads the dark mode state from localStorage on initial render', () => {
    // Set darkMode to true in localStorage
    localStorage.setItem('darkMode', 'true');

    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // The SunIcon should be visible since dark mode is on
    expect(button).toContain(screen.getByTestId('moon-icon'));
    expect(button).not.toContain(screen.getByTestId('sun-icon'));

    // The 'dark' class should be added to document.documentElement
    expect(document.documentElement.classList).toContain('dark');
  });

  test('removes the dark class when dark mode is toggled off', () => {
    // Set darkMode to true in localStorage and add 'dark' class
    localStorage.setItem('darkMode', 'true');
    document.documentElement.classList.add('dark');

    render(<DarkModeToggle />);
    const button = screen.getByRole('button');

    // Click the button to disable dark mode
    fireEvent.click(button);

    // The MoonIcon should be visible
    expect(button).toContain(screen.getByTestId('moon-icon'));
    expect(button).not.toContain(screen.getByTestId('sun-icon'));

    // The 'dark' class should be removed from document.documentElement
    expect(document.documentElement.classList).not.toContain('dark');

    // Check if localStorage has been updated
    expect(localStorage.getItem('darkMode')).toBe('false');
  });
});
