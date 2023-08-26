import React, { useCallback, useEffect, useMemo, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/action';

import { ProgressSpinner } from 'primereact/progressspinner';

export default function Service(props) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    props.setProgress(0);
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    props.setProgress(0);
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
      props.setProgress(100);
    }, 1300);
  }, [fetchData]);

  const myProduct = useMemo(() => product, [product]);

  if (isLoading) {
    return (
      <div className='flex justify-content-center align-items-md-center' style={{ height: '100vh' }}>
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap' style={{ height: '100vh' }}>
      {myProduct.map((value, index) => (
        <div className='card' style={{ width: '18rem' }} key={index}>
          <img src={value.image} className='card-img-top' alt={index} />
          <div className='card-body'>
            <h5 className='card-title'>{value.title}</h5>
            <p className='card-text'>{value.description}</p>
            <p className='card-text text-success'>Price: {value.price} $.</p>
            <Link to='/buy' className='btn btn-primary'>
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
