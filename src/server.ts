import app from './lib/app';

const port = process.env.API_PORT ?? 3000;

app.listen(port, () => {
  console.info(`server up at ${port}!`);
});
