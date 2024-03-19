import { SteamGamesController } from './steamGames';
import { SteamService } from '../services';

const steamService = new SteamService();
export const steamGamesController = new SteamGamesController(steamService);
