import { Day } from '../../model/types';
import { DayCard } from '../DayCard';
import styles from './schedule.module.scss';

type Props = {
	week: Day[];
};

/**
 * Основное расписание на неделю.
 * @param week - текущая неделя.
 */
export const Schedule = ({ week }: Props) => {
	const weekdays = week.slice(0, 5); // Пн–Сб
	const weekends = week.slice(5, 7); // Вс
	return (
		<div className="container">
			<div className={styles.row}>
				{weekdays.map((day) => (
					<DayCard key={day.id} day={day}/>
				))}
			</div>

			<div className={styles.row}>
				{weekends.map((day) => (
					<DayCard key={day.id} day={day}/>
				))}
			</div>
		</div>
	);
};
