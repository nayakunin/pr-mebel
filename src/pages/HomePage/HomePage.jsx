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
  FormSubmitPopup,
  GoTopButton,
  DesignOffer,
} from 'components';
import {
  Carousel,
  Description,
  Catalog,
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

const marginTop80 = {
  marginTop: '80px',
};

const marginTop40 = {
  marginTop: '40px',
};

const useStyles = makeStyles((theme) => ({
  carousel: {

  },
  description: {
    marginTop: '65px',
  },
  catalog: marginTop80,
  designOffer: marginTop80,
  feedbackForm: marginTop80,
  advantages: marginTop80,
  wardrobe_left: marginTop80,
  wardrobe_right: marginTop80,
  about: marginTop80,
  callDesigner: marginTop80,
  callDesignerForm: marginTop80,
  ourProduction: marginTop80,
  howToOrder: marginTop80,
  faq: marginTop80,
  questionsForm: marginTop80,
  shopImg: marginTop40,
  contacts: marginTop80,
  [theme.breakpoints.down('xs')]: {
    description: marginTop40,
    catalog: marginTop40,
    designOffer: marginTop40,
    feedbackForm: marginTop40,
    advantages: marginTop40,
    wardrobe_left: marginTop40,
    wardrobe_right: marginTop40,
    about: marginTop40,
    callDesigner: marginTop40,
    callDesignerForm: marginTop40,
    ourProduction: marginTop40,
    howToOrder: marginTop40,
    faq: marginTop40,
    questionsForm: marginTop40,
    shopImg: marginTop40,
    contacts: marginTop40,
  },
}));

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
          className={classes.designOffer}
        >
          <DesignOffer />
        </section>
        <section
          className={classes.feedbackForm}
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
          className={classes.callDesigner}
        >
          <CallDesigner />
        </section>
        <section
          className={classes.callDesignerForm}
        >
          <CallDesignerForm />
        </section>
        <section
          ref={(el) => { refsMap.current['#production'] = el; }}
          className={classes.ourProduction}
        >
          <OurProduction />
        </section>
        <section
          ref={(el) => { refsMap.current['#how-to-order'] = el; }}
          className={classes.howToOrder}
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
          className={classes.questionsForm}
        >
          <QuestionsForm />
        </section>
        <section
          ref={(el) => { refsMap.current['#shop-img'] = el; }}
          className={classes.shopImg}
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
      <FormSubmitPopup />
      <GoTopButton />
    </>
  );
};
