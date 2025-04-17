import { Day } from '../model/types';
import { DayCard } from './DayCard';

type Props = {
	week: Day[];
};

export const Week = ({ week }: Props) => {
	return (
		<div style={{ display: 'flex', gap: 12 }}>
			{week.map((day) => (
				<DayCard key={day.id} day={day} />
			))}
		</div>
	);
};
