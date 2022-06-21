import React, { useState } from 'react';

import { links } from '../../data/linksData';
import styles from './About.module.scss';

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerSetOpen = () => {
    /* TODO: тут  prevValue не нужно, так как всё будет синхронно
        можно () => setIsOpen(!isOpen)
      */
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <article className={styles.about}>
      <p>Привет! Я Миша, мне 24, а родом из Москвы.</p>
      <p>Я люблю футбол и бег, аналоговую фотографию, электронную и эксперементальную музыку.</p>
      <p>
        А ещё я front-end разработчик.{' '}
        <a href={links.resume} target="_blank" className={styles.about__hire}>
          Hire me!
        </a>{' '}
        <button type="button" className={styles.about__skills_button} onClick={handlerSetOpen}>
          {isOpen ? 'Hide' : 'Show'} skills
        </button>
      </p>
      <div className={styles.about__skills} hidden={!isOpen && true}>
        <ul className={styles.about__skills_content}>
          <li>HTML</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>React-Router</li>
          <li>Linux</li>
          <li>Git</li>
        </ul>
      </div>
    </article>
  );
};
