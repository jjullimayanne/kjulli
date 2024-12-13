import { WalletRepository } from '../repositories/WalletRepository';

export class AddPointsUseCase {
  constructor(private walletRepository: WalletRepository) {}

  async execute(userId: number, points: number): Promise<void> {
    const wallet = await this.walletRepository.findByUserId(userId);

    if (!wallet) {
      await this.walletRepository.create({ id: 0, userId, points });
      return;
    }

    wallet.points += points;
    await this.walletRepository.update(wallet);
  }
}
