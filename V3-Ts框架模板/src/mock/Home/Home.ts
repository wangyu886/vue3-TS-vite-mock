import { MockMethod } from 'vite-plugin-mock';
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
declare type Recordable<T = any> = Record<string, T>;

interface Records {
    url: Recordable;
    body: Recordable;
    query: Recordable;
    headers: Recordable;
}

export default <Array<MockMethod>> [
    {
        url: '/api/get',
        method: 'get',
        response: ({ query }: Records) => {
            return {
                code: 0,
                data: {
                    name: 'vben',
                },
            };
        },
    },
] 