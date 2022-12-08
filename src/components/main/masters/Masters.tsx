import React, {FC} from 'react';
import { masterData } from './masterData';
import classes from './Masters.module.css';

const Masters: FC = () => {
  return (
    <section className={classes.masters}>
        <p>Наши мастера</p>
        <h2 className={classes.masters__header}>Мастера, творящие красоту</h2>
            <ul className={classes.masters__list}>
                {masterData.map((master, index) =>
                    <li className={classes.masters__item} key={index}>
                        <img src={master.photo} alt={master.name} />
                        <div>
                            <h4 className={classes.masters__name}>{master.name}</h4>
                            <p className={classes.masters__quality}>{master.quality}</p>
                            <p className={classes.masters__description}>{master.description}</p>
                            <button className={classes.masters__button}>
                                <span>⟶ Смотреть работы</span>
                            </button>
                        </div>
                    </li>
                )}
            </ul>
    </section>
  )
}

export default Masters;