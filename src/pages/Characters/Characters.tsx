import React from 'react';

import Cart from '../../components/Cart/Cart';
import Sort from '../../components/Sort/Sort';
import Paginate from '../../components/Paginate/Paginate';
import BtnWookiee from '../../components/BtnWookiee/BtnWookiee';
import Mask from '../../components/Mask/Mask';

import { useGetCharacterAllQuery } from '../../redux/Characters/characterApi';

import styles from './Characters.module.scss';

const Characters: React.FC = () => {
  //Состояние - модальное окно
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  //Состояние - номер текущей страницы
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const { data, isSuccess, isError } = useGetCharacterAllQuery('');
  
  return (
    <React.Fragment>
      <Mask open={isOpen} onClose={() => setIsOpen(false)} />
      <div className={styles.wrapper}>
        <div className={styles.charactersContainer}>
          <div className={styles.language}>
            <p>language: en</p>
          </div>
          <div className={styles.title}>
            <h2><span>60 Peoples</span> for you to choose your favorite</h2>
          </div>
          <Sort />
          <Cart onOpen={() => setIsOpen(true)} count={data?.count} />
          <Paginate />
          <BtnWookiee />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Characters;