import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import userEvent from '@testing-library/user-event';
import Input from '../components/Input';

describe('Input Component', () => {
    it('renders with custom placeholder', async () => {
        const { getByPlaceholder } = render(<Input type='text' name="name" placeHolder="TestPlaceholder" />);

        const input = getByPlaceholder('TestPlaceholder');
        await expect.element(input).toBeInTheDocument();
    });

    it('applies custom classes when provided', async () => {
        const { getByRole } = render(<Input type='text' name="name" classes="test-class" />);

        const input = getByRole('textbox');
        await expect.element(input).toHaveClass('test-class');
    });

    it('calls the onChange handler when text is entered', async () => {
        const handleChange = vi.fn();
        const { getByRole } = render(<Input type='text' name="name" onChange={handleChange} />);
        const input = getByRole('textbox');
        await userEvent.type(input.element(), 'Test input');

        expect(handleChange).toHaveBeenCalledTimes(10);
    });

    it('is disabled when disabled prop is true', async () => {
        const { getByRole } = render(<Input type='text' name="name" disabled />);

        const input = getByRole('textbox');
        await expect.element(input).toBeDisabled();
    });
});