import React, {FC, MutableRefObject, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import About from '../../components/main/about/About';
import Contacts from '../../components/main/contacts/Contacts';
import MainCover from '../../components/main/cover/Cover';
import Gallery from '../../components/main/gallery/Gallery';
import Masters from '../../components/main/masters/Masters';
import Services from '../../components/main/servs/Services';
import { IBlocks } from '../../models/IBlocks';
import classes from './Main.module.css';

const Main: FC = () => {

  const params = useParams();

  const blocks: IBlocks = {
    cover: useRef(null),
    about: useRef(null),
    services: useRef(null),
    masters: useRef(null),
    gallery: useRef(null),
    contacts: useRef(null),
  };

  const scrollToBlock = (block = '') => {
    if (block in blocks) {
      blocks[block]?.current?.scrollIntoView({behavior: 'smooth'});
    }
  }

  useEffect(() => {
    scrollToBlock(params.block);
    console.log(params);
  }, [params]);

  
  return (
    <main className={classes.main}>
      <MainCover ref={blocks.cover}/>
      <About ref={blocks.about} />
      <Services ref={blocks.services} />
      <Masters ref={blocks.masters} />
      <Gallery ref={blocks.gallery} />
      <Contacts ref={blocks.contacts} />
    </main>
  )
}

export default Main;