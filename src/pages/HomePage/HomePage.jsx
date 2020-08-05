import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Carousel } from './components/Carousel/Carousel';
import { Description } from './components/Description/Description';
import { Catalog } from './components/Catalog/Catalog';
import { DesignOffer } from './components/DesignOffer/DesignOffer';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { Advantages } from './components/Advantages/Advantages';
import { WardrobeLeft } from './components/WardrobeLeft/WardrobeLeft';
import { WardrobeRight } from './components/WardrobeRight/WardrobeRight';
import { About } from './components/About/About';
import { Order } from './components/Order/Order';
import { CallDesignerForm } from './components/CallDesignerForm/CallDesignerForm';
import { OurProduction } from './components/OurProduction/OurProduction';
import { HowToOrder } from './components/HowToOrder/HowToOrder';
import { FAQ } from './components/FAQ/FAQ';
import { QuestionsForm } from './components/QuestionsForm/QuestionsForm';
import { ShopImg } from './components/ShopImg/ShopImg';
import { Map } from './components/Map/Map';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  const refsMap = useRef({});
  const location = useLocation();

  useEffect(() => {
    refsMap.current = {};
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      refsMap.current[location.hash].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [refsMap.current, location.hash]);

  return (
    <>
      <Header />
      <main>
        <section ref={(el) => { refsMap.current['#carousel'] = el; }}>
          <Carousel />
          <Description />
        </section>
        <section ref={(el) => { refsMap.current['#catalog'] = el; }}>
          <Catalog />
        </section>
        <section ref={(el) => { refsMap.current['#design-offer'] = el; }}>
          <DesignOffer />
          <FeedbackForm />
        </section>
        <section ref={(el) => { refsMap.current['#advantages'] = el; }}>
          <Advantages />
        </section>
        <section ref={(el) => { refsMap.current['#comfort'] = el; }}>
          <WardrobeLeft />
        </section>
        <section ref={(el) => { refsMap.current['#quality'] = el; }}>
          <WardrobeRight />
        </section>
        <section ref={(el) => { refsMap.current['#about'] = el; }}>
          <About />
        </section>
        <section ref={(el) => { refsMap.current['#call-designer'] = el; }}>
          <Order />
          <CallDesignerForm />
        </section>
        <section ref={(el) => { refsMap.current['#production'] = el; }}>
          <OurProduction />
        </section>
        <section ref={(el) => { refsMap.current['#how-to-order'] = el; }}>
          <HowToOrder />
        </section>
        <section ref={(el) => { refsMap.current['#faq'] = el; }}>
          <FAQ />
        </section>
        <section ref={(el) => { refsMap.current['#questions'] = el; }}>
          <QuestionsForm />
        </section>
        <section ref={(el) => { refsMap.current['#shop-img'] = el; }}>
          <ShopImg />
        </section>
        <section ref={(el) => { refsMap.current['#contacts'] = el; }}>
          <Map />
        </section>
      </main>
      <Footer />
    </>
  );
};
