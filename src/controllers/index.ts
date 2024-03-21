import { CardSteamController } from './CardSteam';
import { CreateSteamCard } from '../services';
import { SteamRepository } from '../repository';

const steamRepository = new SteamRepository(process.env.STEAM_API_KEY || '');
const steamService = new CreateSteamCard(steamRepository);
export const steamGamesController = new CardSteamController(steamService);
