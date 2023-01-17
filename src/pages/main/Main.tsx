import React, {FC, useRef} from 'react';
import About from '../../components/main/about/About';
import Contacts from '../../components/main/contacts/Contacts';
import MainCover from '../../components/main/cover/Cover';
import Gallery from '../../components/main/gallery/Gallery';
import Masters from '../../components/main/masters/Masters';
import Services from '../../components/main/servs/Services';
import classes from './Main.module.css';

const Main: FC = () => {

  const blocks = {
    cover: useRef(null),
    about: useRef(null),
    services: useRef(null),
    masters: useRef(null),
    gallery: useRef(null),
    contacts: useRef(null),
  };


  return (
    <main className={classes.main}>
      <MainCover />
      <About />
      <Services />
      <Masters />
      <Gallery />
      <Contacts />
    </main>
  )
}

export default Main;