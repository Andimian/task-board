import { DateDisplay } from '@/features/calendar/ui/dateDisplay/DateDisplay';
import {WeekSwitcher } from '@/features/calendar/ui/WeekSwitcher';
import AuthIcon from '@/shared/assets/icons/user.svg?react';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_content}>
                    <DateDisplay />

                    <div className={`${styles.header__buttons}`}>
                        <AuthIcon />
                        <WeekSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};
