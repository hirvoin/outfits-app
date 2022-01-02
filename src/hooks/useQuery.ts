import { useEffect, useState } from "react";
import fetchGraphQL from "../services/fetchGraphQL";

interface QueryResult {
  loading: boolean;
  data: unknown[];
  error: unknown;
}

const useQuery = (
  query: string,
  variables?: Record<string, unknown>
): QueryResult => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetch() {
      setLoading(true);
      try {
        if (!isMounted) {
          return;
        }
        const response = await fetchGraphQL(query, variables);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Failed to perform fetchGraphQL", e);
        setError(e);
        setLoading(false);
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
