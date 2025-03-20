import { DateDisplay } from "@/features/calendar/ui/DateDisplay";
import { WeekSwitcher } from "@/features/calendar/ui/WeekSwitcher";
// import { AuthIcon } from "@/features/auth/ui/AuthIcon";

export const Header = () => {
    return (
        <header className="header">
            <WeekSwitcher />
            <DateDisplay />
            {/*<AuthIcon />*/}
        </header>
    );
};
