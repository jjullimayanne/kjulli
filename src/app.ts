import { initApp } from './init';

const PORT = process.env.PORT || 3000;

(async () => {
  const app = await initApp();

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
})();
