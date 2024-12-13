import SequelizeMock from "sequelize-mock";

const dbMock = new SequelizeMock();

export const WalletMock = dbMock.define("Wallet", {
  id: 1,
  userId: 1,
  points: 50,
});
