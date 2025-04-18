import { Day } from '../model/types';

type Props = {
	day: Day;
	onClose: () => void;
};

export const DayDetail = ({ day, onClose }: Props) => (
	<div>
		<h2>День: {day.name}</h2>
		<button onClick={onClose}>Закрыть</button>
		{day.tasks.map((task) => (
			<div key={task.id}>{task.title}</div>
		))}
	</div>
);
