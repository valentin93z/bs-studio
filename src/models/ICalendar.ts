import { IDay } from "./IDay";

export interface ICalendar {
    fullDate: number | null;
    days: IDay[];
}