import bodyParser from 'body-parser';
import express from 'express';
import routes from './app/routes'; 
import { sequelize } from './data/models'; 

export const initApp = async (): Promise<express.Application> => {
  const app = express();

  app.use(bodyParser.json());

  app.use('/api', routes);

  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

  return app;
};
