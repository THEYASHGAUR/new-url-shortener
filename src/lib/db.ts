import { Url } from "../../types";

let urls: Url[] = [];

export const addUrl = (originalUrl: string): Url => {
  const id = Math.random().toString(36).substring(2, 8);
  const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`;
  const url: Url = { id, originalUrl, shortUrl };
  urls.push(url);
  return url;
};

export const getUrlById = (id: string): Url | undefined => {
  return urls.find(url => url.id === id);
};
