interface IService {
    id: string;
    title: string;
    price: string;
};

export interface IServiceData {
    [key: string]: IService[],
};