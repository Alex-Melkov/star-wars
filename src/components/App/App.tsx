import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Loader from '../Loader/Loader';
import CartModal from '../CartModal/CartModal';

import styles from './App.module.scss';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '../../pages/Home/Home'));
const Characters = React.lazy(() => import(/* webpackChunkName: "Characters" */ '../../pages/Characters/Characters'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound/NotFound'));

const App: React.FC = () => {
  let modalRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      {/* <CartModal ref={modalRef} /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="characters" element={
              <Suspense fallback={<Loader />}>
                <Characters />
              </Suspense>} />
          </Route>
          <Route path="*" element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>} />
        </Routes>
    </div>
  )
}

export default App;