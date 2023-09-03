import { useCallback, useState } from 'react';

export function useFetch() {
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(
    async (url: string, options: RequestInit) => {
      setLoading(true);

      try {
        const json = await fetch(url, options).then((response) => response.json());

        if (json.errors) throw new Error('Error in request');

        return json;
      } catch (error) {
        console.log(error);

        return error;
      }
    },

    []
  );

  return { loading, request };
}
