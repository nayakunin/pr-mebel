import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Lead } from './components/Lead/Lead';

export const Catalog = () => (
  <>
    <Header />
    <main>
      <Lead />
      {/* <Filters />
      <Gallery />
      <FeedbackForm /> */}
    </main>
    <Footer />
  </>
);
