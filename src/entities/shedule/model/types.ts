import {DayKey} from '@/entities/shedule/model/constants';

/** Задача  */
export type ScheduleItem = {
	id: string;
	title: string;
	completed: boolean;
};

export type Day = {
	id: string;
	date: ISODateString;	// формат ISO 8601 для унификации данных, пример: "2025-04-18T14:30:00.000Z"
	name: DayKey;
	tasks: ScheduleItem[];
};

/** Чтобы помнить, что на практике это будут строки, представляющие дату в ISO-формате */
type ISODateString = string;
