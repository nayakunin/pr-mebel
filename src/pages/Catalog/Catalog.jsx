import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import {
  Header,
  Footer,
  OrderFormPopup,
  FormSubmitPopup,
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
} from 'actions';
import { filters } from '__constants__';
import {
  CardPopup,
  Filters,
  Gallery,
  Lead,
  Questions,
} from './components';
import { catalogSelector } from './selectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const {
    items,
    hasMore,
    isLoading,
    page,
    // isError,
    filter,
    currentItemId,
    isCardPopupOpen,
  } = useSelector(catalogSelector);
  const location = useLocation();

  // Применить фильтр
  const handleApplyFilter = useCallback(() => {
    dispatch(resetCatalog());
    dispatch(fetchCatalog());
  }, [dispatch]);

  // Поменять значение одного из селектов
  const handleChangeFilter = useCallback(({ name, value }) => {
    dispatch(changeFilter({
      name,
      value,
    }));
  }, [dispatch]);

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
  const handleGoToPevCard = useCallback(() => {
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

  return (
    <>
      <Header />
      <main>
        <Lead />
        <Filters
          filter={filter}
          options={filters}
          onApplyFilter={handleApplyFilter}
          onChange={handleChangeFilter}
        />
        <Gallery
          items={items}
          isLoading={isLoading}
          hasMore={hasMore}
          page={page}
          onCardClick={handleCardClick}
        />
        <Questions />
      </main>
      {isCardPopupOpen && (
        <CardPopup
          items={items}
          currentItemId={currentItemId}
          isOpen={isCardPopupOpen}
          onClose={handleCloseCardPopup}
          onClickBack={handleGoToPevCard}
          onClickForward={handleGoToNextCard}
          onDownloadMoreCards={handleDownloadMoreCards}
        />
      )}
      <Footer />
      <OrderFormPopup />
      <FormSubmitPopup />
    </>
  );
};
