import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnswerSection from './AnswerSection';

describe('AnswerSection', () => {
    const storedValues = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        // Add more test data if needed
    ];

    test('renders correct question and answer', () => {
        render(<AnswerSection storedValues={storedValues} />);

        // Assert that each question and answer is rendered
        storedValues.forEach((value) => {
            const questionElement = screen.getByText(value.question);
            const answerElement = screen.getByText(value.answer);

            expect(questionElement).toBeInTheDocument();
            expect(answerElement).toBeInTheDocument();
        });
    });
});
