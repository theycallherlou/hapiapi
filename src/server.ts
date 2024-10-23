import app from './global/app';

const port = process.env.API_PORT ?? 3000;

app.listen(port, () => {
  // TODO: "delete debug logs throughout"
  console.info(`server up at ${port}!`);
});
