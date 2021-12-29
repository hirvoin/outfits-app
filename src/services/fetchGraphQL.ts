async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>,
) {
  const response = await fetch("http://192.168.11.7:8080/query", {
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
