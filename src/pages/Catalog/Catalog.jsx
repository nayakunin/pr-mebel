import React, {
  useCallback,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import {
  Header,
  Footer,
  OrderFormPopup,
  FormSubmitPopup,
  DesignOffer,
  Map,
  ShopImg,
  GoTopButton,
} from 'components';
import {
  fetchCatalog,
  changeFilter,
  resetCatalog,
  resetFilters,
  openCardPopup,
  closeCardPopup,
  goToNextCard,
  goToPrevCard,
  changePage,
  openFullScreenPopup,
  closeFullScreenPopup,
} from 'actions';
import { filters } from '__constants__';
import {
  CardPopup,
  Filters,
  Gallery,
  Lead,
  Questions,
  FullScreenPopup,
} from './components';
import { catalogSelector } from './selectors';

const useStyles = makeStyles((theme) => ({
  filterSection: {
    marginTop: '60px',
  },
  gallerySection: {
    marginTop: '20px',
    marginBottom: '60px',
  },
  designOfferSection: {
    margin: '40px 0',
  },
  shopImgSection: {
    marginTop: '40px',
  },
  mapSection: {
    marginTop: '80px',
  },
  [theme.breakpoints.down('md')]: {
    filterSection: {
      marginTop: '40px',
    },
    mapSection: {
      marginTop: '60px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    mapSection: {
      marginTop: '40px',
    },
  },
}));

export default () => {
  const classes = useStyles();
  const refsMap = useRef({});
  const dispatch = useDispatch();
  const {
    items,
    hasMore,
    isLoading,
    page,
    filter,
    currentItemId,
    isCardPopupOpen,
    isFullScreenPopupOpen,
  } = useSelector(catalogSelector);
  const location = useLocation();

  // Применить фильтр
  const handleApplyFilter = useCallback(() => {
    dispatch(resetCatalog());
    dispatch(fetchCatalog());
  }, [dispatch]);

  // Открыть картинку на полный экран
  const handleOpenFullScreenPopup = useCallback((itemId) => {
    dispatch(openFullScreenPopup(itemId));
  }, [dispatch]);

  // Закрыть картинку, открытую на полный экран
  const handleCloseFullScreenPopup = useCallback(() => {
    dispatch(closeFullScreenPopup());
  }, [dispatch]);

  // Поменять значение одного из параметра фильтра
  const handleChangeFilter = useCallback(({ name, value }) => {
    dispatch(changeFilter({
      name,
      value,
    }));

    handleApplyFilter();
  }, [dispatch, handleApplyFilter]);

  // Открыть модальное окно с итемом
  const handleCardClick = useCallback((itemId) => {
    dispatch(openCardPopup(itemId));
  }, [dispatch]);

  // Закрыть модальное окно итемов
  const handleCloseCardPopup = useCallback(() => {
    dispatch(closeCardPopup());
  }, [dispatch]);

  // Открыть следующий итем внутри модального окна итемов
  const handleGoToNextCard = useCallback(() => {
    dispatch(goToNextCard());
  }, [dispatch]);

  // Открыть предыдущий итем внутри модального окна итемов
  const handleGoToPrevCard = useCallback(() => {
    dispatch(goToPrevCard());
  }, [dispatch]);

  const handleDownloadMoreCards = useCallback(() => {
    dispatch(changePage(page + 1));
    dispatch(fetchCatalog());
  }, [dispatch, page]);

  // Разбирает поиск из урла, подставляет параметры в селекты, и делает по ним запрос
  useEffect(() => {
    const search = QueryString.parse(location.search);
    if (Object.keys(search).length) {
      Object.keys(search).forEach((key) => {
        dispatch(changeFilter({
          name: key,
          value: search[key],
        }));
      });
    } else {
      dispatch(resetFilters());
    }
    handleApplyFilter();
  }, [location, dispatch, handleApplyFilter]);

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
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Lead sectionId={filter.section} />
        <section
          id="filters"
          ref={(el) => { refsMap.current['#filters'] = el; }}
          className={classes.filterSection}
        >
          <Filters
            filter={filter}
            options={filters}
            onChange={handleChangeFilter}
          />
        </section>
        <section className={classes.gallerySection}>
          <Gallery
            items={items}
            isLoading={isLoading}
            hasMore={hasMore}
            page={page}
            onCardClick={handleCardClick}
          />
        </section>
        <section className={classes.designOfferSection}>
          <DesignOffer />
        </section>
        <section className={classes.questionsSection}>
          <Questions />
        </section>
        <section className={classes.shopImgSection}>
          <ShopImg />
        </section>
        <section className={classes.mapSection}>
          <LazyLoad height={500} offset={500}>
            <Map />
          </LazyLoad>
        </section>
      </main>
      {isCardPopupOpen && (
        <CardPopup
          items={items}
          currentItemId={currentItemId}
          isOpen={isCardPopupOpen}
          isLoading={isLoading}
          onClose={handleCloseCardPopup}
          onClickBack={handleGoToPrevCard}
          onClickForward={handleGoToNextCard}
          onDownloadMoreCards={handleDownloadMoreCards}
          onFullScreenPopupOpen={handleOpenFullScreenPopup}
        />
      )}
      {isFullScreenPopupOpen && (
        <FullScreenPopup
          img={items[currentItemId].imageFull.url}
          isOpen={isFullScreenPopupOpen}
          onClose={handleCloseFullScreenPopup}
        />
      )}
      <Footer />
      <OrderFormPopup />
      <FormSubmitPopup />
      <GoTopButton />
    </>
  );
};
