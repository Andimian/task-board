import { Day } from '../../model/types';
import { DayCard } from '../DayCard/DayCard';
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
			<div className={styles.schedule}>
				<div className={styles.schedule_workingDays}>
					{weekdays.map((day) => (
						<DayCard key={day.id} day={day}/>
					))}
				</div>

				<div className={styles.schedule_extraDays}>
					<div className={styles.schedule_weekends}>
						{weekends.map((day) => (
							<DayCard key={day.id} day={day}/>
						))}
					</div>

					{/* Блок когда-нибудь */}
					<div>
						<h3>Когда-нибудь</h3>
						<button onClick={() => console.log('перекинь меня в задачи дня')}>Подробнее</button>
					</div>
				</div>
			</div>
		</div>
	);
};
