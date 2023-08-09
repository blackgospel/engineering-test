import fetchMock from 'jest-fetch-mock';
import { baseApi } from './base-api';
import { setupApiStore } from './utils';

beforeEach((): void => {
  fetchMock.resetMocks();
});

describe('ListUsers', () => {
  const storeRef = setupApiStore(baseApi);
  fetchMock.mockResponse(JSON.stringify({}));

  test('request is correct', () => {
    return storeRef.store
      .dispatch<any>(baseApi.endpoints.getAllUsers.initiate(undefined))
      .then(() => {
        console.log('hi');
        expect(fetchMock).toBeCalledTimes(1);
        const { method, headers, url } = fetchMock.mock.calls[0][0] as Request;

        const accept = headers.get((Headers as any).Accept);

        expect(method).toBe('GET');
        expect(url).toBe(`http://localhost:4200/api/1/users`);
        expect(accept).toBe('application/json');
      });
  }, 10000);

  test('successful response', () => {
    const storeRef = setupApiStore(baseApi);
    fetchMock.mockResponse(JSON.stringify({}));

    return storeRef.store
      .dispatch<any>(baseApi.endpoints.getAllUsers.initiate(undefined))
      .then((action: any) => {
        const { status, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
      });
  });
  test('unsuccessful response', () => {
    const storeRef = setupApiStore(baseApi);
    fetchMock.mockReject(new Error('Internal Server Error'));

    return storeRef.store
      .dispatch<any>(baseApi.endpoints.getAllUsers.initiate(undefined))
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action;
        expect(status).toBe('rejected');
        expect(isError).toBe(true);
        expect(error).toBe('Error: Internal Server Error');
      });
  });
});
