import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useFetch(entity:string, path:string) {
  const entityArray = [];
  entityArray.push(entity);
  const { isLoading, error, data } = useQuery(entityArray, () =>
    axios({
      baseURL: 'https://swapi.dev/api/',
      url: `${path}`,
    }),
    { retry: 2 }
  );

  return {
    data,
    isLoading,
    error
  };
}

export default useFetch;
