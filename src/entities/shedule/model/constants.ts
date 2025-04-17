export const DayNames = {
	Mon: {
		short: 'Пн.',
		full: 'Понедельник',
	},
	Tue: {
		short: 'Вт.',
		full: 'Вторник',
	},
	Wed: {
		short: 'Ср.',
		full: 'Среда',
	},
	Thu: {
		short: 'Чт.',
		full: 'Четверг',
	},
	Fri: {
		short: 'Пт.',
		full: 'Пятница',
	},
	Sat: {
		short: 'Сб.',
		full: 'Суббота',
	},
	Sun: {
		short: 'Вс.',
		full: 'Воскресенье',
	},
} as const;

// Строковой union из ключей DayNames
export type DayKey = keyof typeof DayNames; // 'Mon' | 'Tue' | ...

// Тип значения по одному из ключей
export type DayName = typeof DayNames[DayKey]; // 'Понедельник' | ...
