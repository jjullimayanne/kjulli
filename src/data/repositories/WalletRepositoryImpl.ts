import db from "../../data/models";
import { Wallet } from "../../domain/entities/Wallet";
import { WalletRepository } from "../../domain/repositories/WalletRepository";

export class WalletRepositoryImpl implements WalletRepository {
  async findByUserId(userId: number): Promise<Wallet | null> {
    const walletData = await db.Wallet.findOne({ where: { userId } });

    if (!walletData) return null;

    return new Wallet(
      walletData.getDataValue("id"),
      walletData.getDataValue("userId"),
      walletData.getDataValue("points")
    );
  }

  async update(wallet: Wallet): Promise<void> {
    await db.Wallet.update(
      { points: wallet.points },
      { where: { id: wallet.id } }
    );
  }

  async create(wallet: Wallet): Promise<Wallet> {
    const walletData = await db.Wallet.create({
      userId: wallet.userId,
      points: wallet.points,
    });

    // Retorna a entidade Wallet
    return new Wallet(
      walletData.getDataValue("id"),
      walletData.getDataValue("userId"),
      walletData.getDataValue("points")
    );
  }
}
