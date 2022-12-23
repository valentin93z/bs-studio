import { IDay } from "./IDay";
import { IEvent } from "./IEvent";

export interface ICalendar {
    fullDate: number | null;
    days: IDay[];
    events: IEvent[];
}