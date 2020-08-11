import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Lead } from './components/Lead/Lead';
import { Filters } from './components/Filters/Filters';
import { Gallery } from './components/Gallery/Gallery';
import { filters } from '../../constants/filters';
import { fetchCatalog, changeFilter, resetCatalog } from '../../actions/catalog';
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
    }
    dispatch(fetchCatalog());
  }, [location.search, dispatch]);

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
        />
        {/* <FeedbackForm /> */}
      </main>
      <Footer />
    </>
  );
};
