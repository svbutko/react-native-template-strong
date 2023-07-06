export const handleFetchJsonResponse = async (response: Response) => {
  if (!response.status || response.status < 200 || response.status >= 300) {
    throw response;
  }

  return response.json();
};
