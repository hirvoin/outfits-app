import { useEffect, useState } from "react";
import fetchGraphQL from "../services/fetchGraphQL";

interface QueryResult {
  loading: boolean;
  data: any[];
  error: any;
}

const useQuery = (query: string, variables?: any): QueryResult => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetch() {
      setLoading(true);
      try {
        if (!isMounted) {
          setLoading(false);
          return;
        }
        const response = await fetchGraphQL(query);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        console.error("Failed to perform fetchGraphQL", e);
        setLoading(false);
        setError(e);
      }
    }
    fetch();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data, error };
};

export default useQuery;
