import { Day } from '@/entities/shedule';
import { DayKey } from '@/entities/shedule/model/constants';
import { v4 as uuidv4 } from 'uuid';

export const getDayName = (date: string): string => {
	return new Date(date).toLocaleDateString('ru-RU', { weekday: 'long' });
};

const dayOrder: DayKey[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

/**
 * Генератор недели (с понедельника по воскресенье), которая включает указанную дату.
 * Если дата не передана — используется текущая дата.
 * @param date Опциональная дата в формате ISO (YYYY-MM-DD) или объект Date.
 */
export function getCurrentWeekRange(date?: string | Date): Day[] {
	const baseDate = date ? new Date(date) : new Date();

	const dayOfWeek = baseDate.getDay(); // 0 (Sun) - 6 (Sat)
	const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

	const startOfWeek = new Date(baseDate);
	startOfWeek.setDate(baseDate.getDate() + diffToMonday);

	const days: Day[] = [];

	for (let i = 0; i < 7; i++) {
		const current = new Date(startOfWeek);
		current.setDate(startOfWeek.getDate() + i);

		const name = dayOrder[i]; // гарантирован DayKey
		const isoDate = current.toISOString().split('T')[0];

		days.push({
			id: uuidv4(),
			date: isoDate,
			name,
			tasks: [],
		});
	}

	return days;
}
