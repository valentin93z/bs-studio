interface IQuality {
    topMaster: string;
    master: string;
    juniorMaster: string;
}

interface IService {
    title: string;
    price: string;
}

export interface IServiceData {
    quality: IQuality;
    services: {
        manicure: {
            topMaster: IService[];
            master: IService[];
            juniorMaster: IService[];
        },
        pedicure: {
            topMaster: IService[];
            master: IService[];
            juniorMaster: IService[];
        }
    };
}