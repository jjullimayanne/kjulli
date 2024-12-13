// import { WalletRepository } from "../repositories/WalletRepository";

// export class RedeemCouponUseCase {
//     constructor(
//       private walletRepository: WalletRepository,
//       private couponRepository: CouponRepository
//     ) {}
  
//     async execute(userId: number, couponCode: string): Promise<void> {
//       const wallet = await this.walletRepository.findByUserId(userId);
//       const coupon = await this.couponRepository.findByCode(couponCode);
  
//       if (!wallet || !coupon) throw new Error('Invalid operation');
//       if (wallet.points < coupon.value)
//         throw new Error('Not enough points');
  
//       wallet.points -= coupon.value;
//       await this.walletRepository.update(wallet);
//     }
//   }
  