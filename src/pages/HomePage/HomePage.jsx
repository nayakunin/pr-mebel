import React from 'react';
import { Header } from '../../components/Header/Header';
import { Carousel } from './components/Carousel/Carousel';
import { Description } from './components/Description/Description';
import { Catalog } from './components/Catalog/Catalog';
import { DesignOffer } from './components/DesignOffer/DesignOffer';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
// import { Advantages } from './components/Advantages/Advantages';
// import { WardrobeLeft } from './components/WardrobeLeft/WardrobeLeft';
// import { WardrobeRight } from './components/WardrobeRight/WardrobeRight';
// import { About } from './components/About/About';
// import { Order } from './components/Order/Order';
// import { CallDesignerFrom } from './components/CallDesignerForm/CallDesignerForm';
// import { OurProduction } from './components/OurProduction/OurProduction';
// import { HowToOrder } from './components/HowToOrder/HowToOrder';
// import { FAQ } from './components/FAQ/FAQ';
// import { QuestionsForm } from './components/QuestionsForm/QuestionsForm';
// import { ShopImg } from './components/ShopImg/ShopImg';
// import { Map } from './components/Map/Map';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => (
  <>
    <Header />
    <main>
      <Carousel />
      <Description />
      <Catalog />
      <DesignOffer />
      <FeedbackForm />
      {/* <Advantages />
    <WardrobeLeft />
    <WardrobeRight />
    <About />
    <Order />
    <CallDesignerFrom />
    <OurProduction />
    <HowToOrder />
    <FAQ />
    <QuestionsForm />
    <ShopImg />
    <Map /> */}
    </main>
    <Footer />
  </>
);
