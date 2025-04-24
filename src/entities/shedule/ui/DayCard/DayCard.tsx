import { Day } from '../../model/types';
import styles from './dayCard.module.scss';

type Props = {
	day: Day;
};

/**
 * Карточка дня
 */
export const DayCard = ({ day }: Props) => (
	<section className={styles.dayCard}>
		<header className={styles.dayCard_header}>
			<h2 className={styles.dayCard_date}>
				{new Date(day.date).toLocaleDateString('ru-RU', {
					day: '2-digit',
					month: '2-digit',
				})}
			</h2>
			<div>{day.name}</div>
		</header>
		<button onClick={() => console.log('перекинь меня в задачи дня')}>Подробнее</button>
		{day.tasks.slice(0, 3).map((task) => (
			<div key={task.id}>{task.title}</div>
		))}
	</section>
);
