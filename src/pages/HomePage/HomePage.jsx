import React, {
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import {
  Header,
  Footer,
  OrderFormPopup,
  FileUploadPopup,
} from 'components';
import {
  Carousel,
  Description,
  Catalog,
  DesignOffer,
  FeedbackForm,
  Advantages,
  WardrobeLeft,
  WardrobeRight,
  About,
  CallDesigner,
  CallDesignerForm,
  OurProduction,
  HowToOrder,
  FAQ,
  QuestionsForm,
  ShopImg,
  Map,
} from './components';

const useStyles = makeStyles({
  carousel: {

  },
  description: {
    marginTop: '65px',
  },
  catalog: {
    marginTop: '80px',
  },
  'design-offer': {
    marginTop: '80px',
  },
  'feedback-form': {
    marginTop: '80px',
  },
  advantages: {
    marginTop: '80px',
  },
  wardrobe_left: {
    marginTop: '80px',
  },
  wardrobe_right: {
    marginTop: '80px',
  },
  about: {
    marginTop: '80px',
  },
  'call-designer': {
    marginTop: '80px',
  },
  'call-designer-form': {
    marginTop: '80px',
  },
  'our-production': {
    marginTop: '80px',
  },
  'how-to-order': {
    marginTop: '80px',
  },
  faq: {
    marginTop: '80px',
  },
  'questions-form': {
    marginTop: '80px',
  },
  'shop-img': {
    marginTop: '40px',
  },
  contacts: {
    marginTop: '80px',
  },
});

export const HomePage = () => {
  const classes = useStyles();
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
  }, [location.hash]);

  return (
    <>
      <Header />
      <main>
        <section
          ref={(el) => { refsMap.current['#carousel'] = el; }}
          className={classes.carousel}
        >
          <Carousel />
        </section>
        <section
          className={classes.description}
        >
          <Description />
        </section>
        <section
          ref={(el) => { refsMap.current['#catalog'] = el; }}
          className={classes.catalog}
        >
          <Catalog />
        </section>
        <section
          ref={(el) => { refsMap.current['#design-offer'] = el; }}
          className={classes['design-offer']}
        >
          <DesignOffer />
        </section>
        <section
          className={classes['feedback-form']}
        >
          <FeedbackForm />
        </section>
        <section
          ref={(el) => { refsMap.current['#advantages'] = el; }}
          className={classes.advantages}
        >
          <Advantages />
        </section>
        <section
          ref={(el) => { refsMap.current['#comfort'] = el; }}
          className={classes.wardrobe_left}
        >
          <WardrobeLeft />
        </section>
        <section
          ref={(el) => { refsMap.current['#quality'] = el; }}
          className={classes.wardrobe_right}
        >
          <WardrobeRight />
        </section>
        <section
          ref={(el) => { refsMap.current['#about'] = el; }}
          className={classes.about}
        >
          <About />
        </section>
        <section
          ref={(el) => { refsMap.current['#call-designer'] = el; }}
          className={classes['call-designer']}
        >
          <CallDesigner />
        </section>
        <section
          className={classes['call-designer-form']}
        >
          <CallDesignerForm />
        </section>
        <section
          ref={(el) => { refsMap.current['#production'] = el; }}
          className={classes['our-production']}
        >
          <OurProduction />
        </section>
        <section
          ref={(el) => { refsMap.current['#how-to-order'] = el; }}
          className={classes['how-to-order']}
        >
          <HowToOrder />
        </section>
        <section
          ref={(el) => { refsMap.current['#faq'] = el; }}
          className={classes.faq}
        >
          <FAQ />
        </section>
        <section
          ref={(el) => { refsMap.current['#questions'] = el; }}
          className={classes['questions-form']}
        >
          <QuestionsForm />
        </section>
        <section
          ref={(el) => { refsMap.current['#shop-img'] = el; }}
          className={classes['shop-img']}
        >
          <ShopImg />
        </section>
        <section
          ref={(el) => { refsMap.current['#contacts'] = el; }}
          className={classes.contacts}
        >
          <Map />
        </section>
      </main>
      <Footer />
      <OrderFormPopup />
      <FileUploadPopup />
    </>
  );
};
