import useSWR from 'swr';
import { fetchApi } from './fetchApi';

const useFetch = (endPoint) => {
  const { data, error } = useSWR(endPoint, async (url) => {
    try {
      const res = await fetchApi.get(url);
      return res.data.data;
    } catch (error) {
      throw error;
    }
  });

  const loading = !data && !error;

  return { data, loading, error };
};

export default useFetch;
