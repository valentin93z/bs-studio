import React, {FC} from 'react';
import { useAppSelector } from '../../app/hooks';
import Modal from '../modal/Modal';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Cover from './cover/Cover';
import Gallery from './gallery/Gallery';
import classes from './Main.module.css';
import Masters from './masters/Masters';
import Services from './servs/Services';

const Main: FC = () => {

  const {isOpen} = useAppSelector(state => state.modalReducer);

  return (
    <main className={classes.main}>
      <Cover />
      {isOpen && <Modal />}
      <About />
      <Services />
      <Masters />
      <Gallery />
      <Contacts />
    </main>
  )
}

export default Main;