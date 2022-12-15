import { IMaster } from "../../../models/IMaster";
import master01 from '../../../img/master01.jpg';
import master02 from '../../../img/master02.jpg';
import master03 from '../../../img/master03.jpg';
import master04 from '../../../img/master04.jpg';

export const masterData: IMaster[] = [
    {
        name: 'Кристина',
        quality: 'ТОП мастер',
        photo: master01,
        description: 'В профессии с 2018 года. Хорошо развит эстетический вкус, внимательна к деталям. Обладает чувством симметрии и точным глазом. Любит делать клиентов счастливее и работает на результат.',
    },
    {
        name: 'Александра',
        quality: 'Мастер',
        photo: master02,
        description: 'В профессии с 2018 года. Очень внимательная, аккуратная и творческая личность, которая любит своё дело. Постоянно обучается новому, следит за трендами.',
    },
    {
        name: 'Ольга',
        quality: 'ТОП мастер',
        photo: master03,
        description: 'В профессии с 2016 года. Ольга пунктуальная, очень внимательная и аккуратная. Вежливость и тактичность - это про неё. Постоянно обучается новому, следит за трендами.',
    },
    {
        name: 'Дарья',
        quality: 'Младший мастер',
        photo: master04,
        description: 'В профессии с 2019 года. Очень трудолюбивая, ответственная, вежливая и отзывчивая. Любит чистый и аккуратный маникюр. Дарья на одной волне с клиентом.',
    },
]