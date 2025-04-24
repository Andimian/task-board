export const DayNames = {
	Пн: {
		short: 'Пн.',
		full: 'Понедельник',
	},
	Вт: {
		short: 'Вт.',
		full: 'Вторник',
	},
	Ср: {
		short: 'Ср.',
		full: 'Среда',
	},
	Чт: {
		short: 'Чт.',
		full: 'Четверг',
	},
	Пт: {
		short: 'Пт.',
		full: 'Пятница',
	},
	Сб: {
		short: 'Сб.',
		full: 'Суббота',
	},
	Вс: {
		short: 'Вс.',
		full: 'Воскресенье',
	},
} as const;

// Строковой union из ключей DayNames
export type DayKey = keyof typeof DayNames; // 'Mon' | 'Tue' | ...

// Тип значения по одному из ключей
export type DayName = typeof DayNames[DayKey]; // 'Понедельник' | ...
