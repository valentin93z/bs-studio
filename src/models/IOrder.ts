import { IDay } from "./IDay";

export interface IOrder {
    firstName: string;
    lastName: string;
    phone: string;
    selectedDate: IDay;
    master: string;
    serviceType: string;
    service: string;
}