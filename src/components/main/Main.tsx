import React, {FC} from 'react';
import About from './about/About';
import Contacts from './contacts/Contacts';
import Cover from './cover/Cover';
import Gallery from './gallery/Gallery';
import classes from './Main.module.css';
import Masters from './masters/Masters';
import Services from './servs/Services';

const Main: FC = () => {
  return (
    <main className={classes.main}>
      <Cover />
      <About />
      <Services />
      <Masters />
      <Gallery />
      <Contacts />
    </main>
  )
}

export default Main;