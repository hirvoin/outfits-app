async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>,
  token?: string
) {
  const response = await fetch("http://192.168.11.7:8080/query", {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      "X-REQUEST-TYPE": "GraphQL",
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
export default fetchGraphQL;
