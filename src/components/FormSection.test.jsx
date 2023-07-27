import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormSection from './FormSection';

describe('FormSection', () => {
    test('renders the textarea and button', () => {
        render(<FormSection />);
        const textareaElement = screen.getByPlaceholderText('Ask me anything...');
        const buttonElement = screen.getByText('Generate Response 🤖');

        expect(textareaElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('updates the textarea value on change', () => {
        render(<FormSection />);
        const textareaElement = screen.getByPlaceholderText('Ask me anything...');

        fireEvent.change(textareaElement, { target: { value: 'This is a test question.' } });

        expect(textareaElement.value).toBe('This is a test question.');
    });

    test('calls the generateResponse function when the button is clicked', () => {
        const generateResponseMock = jest.fn();
        render(<FormSection generateResponse={generateResponseMock} />);
        const textareaElement = screen.getByPlaceholderText('Ask me anything...');
        const buttonElement = screen.getByText('Generate Response 🤖');

        fireEvent.change(textareaElement, { target: { value: 'Test question for generateResponse' } });
        fireEvent.click(buttonElement);

        expect(generateResponseMock).toHaveBeenCalledWith(
            'Test question for generateResponse',
            expect.any(Function) // This will check if the second argument is a function (setNewQuestion)
        );
    });
});
