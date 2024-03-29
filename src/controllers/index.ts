import { CardSteamController } from './CardSteam';
import { SteamService } from '../services';
import { SteamRepository } from '../repository';

const steamRepository = new SteamRepository(process.env.STEAM_API_KEY || '');
const steamService = new SteamService(steamRepository);
export const steamGamesController = new CardSteamController(steamService);
