import React, {FC} from 'react';
import { serviceData } from './serviceData';
import classes from './Services.module.css';


const Services: FC = () => {
  return (
    <section className={classes.services}>
        <p>Наши услуги</p>
        <h2 className={classes.services__header}>Прайс на все виды услуг</h2>
        <p className={classes.services__text}>Подбор комплекса услуг производится с консультацией мастера в зависимости от пожеланий клиента. Консультация мастеров производится по желанию и включена в стоимость.</p>
        <div className={classes.services__container}>
            <div className={classes.manicure__container}>
                <h3 className={classes.service__typeMan}>Маникюр</h3>
                <div className={classes.manicure__services}>
                    <div className={classes.manicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.topMaster}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.manicure.topMaster.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={classes.manicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.master}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.manicure.master.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={classes.manicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.juniorMaster}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.manicure.juniorMaster.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.pedicure__container}>
                <h3 className={classes.service__typePed}>Педикюр</h3>
                <div className={classes.pedicure__services}>
                    <div className={classes.pedicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.topMaster}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.pedicure.topMaster.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={classes.pedicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.master}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.pedicure.master.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={classes.pedicure__master}>
                        <h4 className={classes.master__header}>{serviceData.quality.juniorMaster}</h4>
                        <ul className={classes.services__list}>
                            {serviceData.services.pedicure.juniorMaster.map((service, index) =>
                                <li className={classes.services__item} key={index}>
                                    <p className={classes.service__title}>{service.title}</p>
                                    <p className={classes.service__price}>{service.price}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;