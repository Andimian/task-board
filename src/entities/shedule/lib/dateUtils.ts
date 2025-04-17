export const getDayName = (date: string): string => {
	return new Date(date).toLocaleDateString('ru-RU', { weekday: 'long' });
};

export function getCurrentWeekRange() {
	const currentDate = new Date();
	const dayOfWeek = currentDate.getDay(); // День недели (0 - воскресенье, 1 - понедельник и т.д.)

	// Получаем начало недели (понедельник)
	const startOfWeek = new Date(currentDate);
	startOfWeek.setDate(currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));

	// Получаем конец недели (воскресенье)
	const endOfWeek = new Date(startOfWeek);
	endOfWeek.setDate(startOfWeek.getDate() + 6);

	return {
		startOfWeek,
		endOfWeek
	};
}
