import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Basic ${process.env.API_SID}:${process.env.API_TOKEN}`,
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
});
