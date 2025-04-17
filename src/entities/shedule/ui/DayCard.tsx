import { Day } from '../model/types';

type Props = {
	day: Day;
};

export const DayCard = ({ day }: Props) => (
	<div>
		<h3>{day.name}</h3>
		<button onClick={() => console.log('перекинь меня в день')}>Подробнее</button>
		{day.tasks.slice(0, 3).map((task) => (
			<div key={task.id}>{task.title}</div>
		))}
	</div>
);
