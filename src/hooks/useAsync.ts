import { useState, useEffect } from 'react';
// import productService from 'services/productService';

type StatusType = 'idle' | 'pending' | 'success' | 'error';
const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('pending');
    setData(null);
    setError(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus('success');
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
        setData(null);
      });
    //   productService.getProducts().then((res) => setProducts(res));
  }, [asyncFunction]);
  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};

export default useAsync;
