import { Sequelize, Model, ModelStatic } from "sequelize";

// Declare os modelos que você tem no projeto
interface DbContext {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  Wallet: ModelStatic<Model>; // Define o tipo do modelo Wallet
  // Adicione outros modelos, como Coupon, se necessário
}

declare const db: DbContext;

export = db;
