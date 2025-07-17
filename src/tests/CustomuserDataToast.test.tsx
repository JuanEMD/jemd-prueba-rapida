import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import CustomUserDataToast from '../components/Toast/CustomUserDataToast';

const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "Password123!",
    confirmPassword: "Password123!"
}

describe('CustomUserDataToast Component', () => {
    it('renders correctly with a message', () => {
        const { getByText } = render(<CustomUserDataToast data={{ userData }} />);
        expect(getByText(JSON.stringify(userData, null, 2))).toBeInTheDocument();
    });
});
