interface IService {
    title: string;
    price: string;
};

export interface IServiceData {
    manicure: IService[],
    pedicure: IService[],
};