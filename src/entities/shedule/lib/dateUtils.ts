import { Day } from '@/entities/shedule';
import { DayKey } from '@/entities/shedule/model/constants';
import { v4 as uuidv4 } from 'uuid';

export const getDayName = (date: string): string => {
	return new Date(date).toLocaleDateString('ru-RU', { weekday: 'long' });
};

const dayOrder: DayKey[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function getCurrentWeekRange(): Day[] {
	const currentDate = new Date();
	const dayOfWeek = currentDate.getDay(); // 0 (Sun) - 6 (Sat)
	const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

	const startOfWeek = new Date(currentDate);
	startOfWeek.setDate(currentDate.getDate() + diffToMonday);

	const days: Day[] = [];

	for (let i = 0; i < 7; i++) {
		const date = new Date(startOfWeek);
		date.setDate(startOfWeek.getDate() + i);

		const name = dayOrder[i]; // гарантирован DayKey
		const isoDate = date.toISOString().split('T')[0];

		days.push({
			id: uuidv4(),
			date: isoDate,
			name,
			tasks: [],
		});
	}

	return days;
}
