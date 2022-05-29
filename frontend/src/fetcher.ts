export default async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init);

  if (
    response.ok &&
    response.headers.get("Content-Type") === "application/json"
  ) {
    const json = await response.json();
    return json;
  }

  throw new FetchError({
    response,
  });
}

export class FetchError extends Error {
  response: Response;
  constructor({ response }: { response: Response }) {
    super(`${response.status} ${response.statusText}`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }

    this.name = "FetchError";
    this.response = response;
  }
}
