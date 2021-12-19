async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>,
) {
  const response = await fetch("http://10.0.2.2:8080/query", {
    method: "POST",
    headers: {
      Authorization: "Bearer xxx",
      "Content-Type": "application/json",
      "X-REQUEST-TYPE": "GraphQL",
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
export default fetchGraphQL;
