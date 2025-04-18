import { render, screen } from '@testing-library/react';
import {Header} from './Header'; // Путь к твоему компоненту

describe('Header', () => {
    it('renders the current date', () => {
        const currentDate = new Date().toLocaleDateString();
        render(<Header />);

        // Проверяем, что дата отображается
        expect(screen.getByText(currentDate)).toBeInTheDocument();
    });

    it('renders an auth icon', () => {
        render(<Header />);

        // Проверяем, что иконка авторизации отображается
        expect(screen.getByTestId('auth-icon')).toBeInTheDocument();
    });
});
