import 'reflect-metadata';
import { Container } from 'inversify';

import { WalletRepository } from '../../domain/repositories/WalletRepository';
import { WalletRepositoryImpl } from '../../data/repositories/WalletRepositoryImpl';
import { AddPointsUseCase } from '../../domain/usecases/AddPointsUseCase';

const container = new Container();

container.bind<WalletRepository>('WalletRepository').to(WalletRepositoryImpl);

container.bind(AddPointsUseCase).toSelf();

export { container };
