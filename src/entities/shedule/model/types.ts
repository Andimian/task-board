import {DayKey} from "@/entities/shedule/model/constants";

/** Задача  */
export type ScheduleItem = {
	id: string;
	title: string;
	completed: boolean;
};

export type Day = {
	id: string;
	date: string;
	name: DayKey;
	tasks: ScheduleItem[];
};
