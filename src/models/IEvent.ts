export interface IEvent {
    status: 'free' | 'ordered';
    date: {
        year: number;
        month: number;
        day: number;
    };
    time: {
        hours: string;
        minutes: string;
    };
    _id: string;
}