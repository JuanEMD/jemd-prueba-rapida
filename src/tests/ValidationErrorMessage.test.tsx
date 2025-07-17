import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import ValidationErrorMessage from '../components/ValidationErrorMessage';

describe('ValidationErrorMessage Component', () => {
    it('renders correctly with a message', () => {
        const { getByLabelText } = render(<ValidationErrorMessage message="Error message" />);
        expect(getByLabelText("mensaje de error")).toBeInTheDocument();
    });
});