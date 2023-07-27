import qs from 'qs';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterName, setFilterPriceFrom, setFilterPriceTo } from '../store/slices/FilterSlice';
import { useAppSelector } from '../store/store';
import { useNavigate } from 'react-router-dom';

export function useQS() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const isFirstRenderForQS = React.useRef(false);
  const filterMainName = useAppSelector((state) => state.filter.name);
  const filterMainPriceFrom = useAppSelector((state) => state.filter.priceFrom);
  const filterMainPriceTo = useAppSelector((state) => state.filter.priceTo);

  React.useEffect(() => {
    const locationHref: string | undefined = String(window.location).split('?')[1];
    if (locationHref) {
      const params = qs.parse(locationHref);
      if (params.filterMainName) {
        dispatch(setFilterName(String(params.filterMainName)));
      }
      if (params.filterMainPriceFrom) {
        dispatch(setFilterPriceFrom(Number(params.filterMainPriceFrom)));
      }
      if (params.filterMainPriceTo) {
        dispatch(setFilterPriceTo(Number(params.filterMainPriceTo)));
      }
    }
  }, []);

  React.useEffect(() => {
    if (!isFirstRenderForQS.current) {
      isFirstRenderForQS.current = true;
      return;
    }
    const queryString = qs.stringify({
      filterMainName,
      filterMainPriceFrom,
      filterMainPriceTo,
    });

    navigate(`?${queryString}`);
  }, [filterMainName, filterMainPriceFrom, filterMainPriceTo]);
}
