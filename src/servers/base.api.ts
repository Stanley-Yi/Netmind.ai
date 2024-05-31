export const getUrl = (uri: string) => `${process.env.PUBLIC_API_BASE_URL}${uri}`;

export interface ResponseBodyType<T extends any> {
    result: T;
    code: number;
    message: string;
}
