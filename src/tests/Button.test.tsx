import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders with default props', async () => {
    const { getByRole } = render(<Button />);

    const button = getByRole('button', { name: 'Button' });
    await expect.element(button).toBeInTheDocument();
    await expect.element(button).toHaveClass('bg-[#00bbec]');
    await expect.element(button).not.toBeDisabled();
  });

  it('renders with custom children text', async () => {
    const { getByRole } = render(<Button>TestButton</Button>);

    const button = getByRole('button', { name: 'TestButton' });
    await expect.element(button).toBeInTheDocument();
  });

  it('applies custom classes when provided', async () => {
    const { getByRole } = render(<Button classes="test-class">TestButton</Button>);

    const button = getByRole('button', { name: 'TestButton' });
    await expect.element(button).toHaveClass('test-class');
  });

  it('calls the onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>TestButton</Button>);

    const button = getByRole('button', { name: 'TestButton' });
    await userEvent.click(button.element());

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', async () => {
    const { getByRole } = render(<Button disabled>TestButton</Button>);

    const button = getByRole('button', { name: 'TestButton' });
    await expect.element(button).toBeDisabled();
    await expect.element(button).toHaveClass('opacity-50 cursor-not-allowed');
  });

  it('shows loading text and is disabled when isLoading is true', async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<Button isLoading={true} onClick={handleClick}>TestButton</Button>);

    const button = getByRole('button', { name: "Cargando..." });
    await expect.element(button).toHaveClass('opacity-50 cursor-not-allowed');
    await expect.element(button).toBeDisabled();

    await userEvent.click(button.element());
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies correct type attribute', async () => {
    const { getByRole } = render(<Button type="submit">Submit</Button>);

    const button = getByRole('button', { name: 'Submit' });
    await expect.element(button).toHaveAttribute('type', 'submit');
  });
});