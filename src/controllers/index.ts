import { CardSteamController } from './CardSteam';
import { CreateSteamCard } from '../services';
import { SteamRepository } from '../repository';

const steamRepository = new SteamRepository('AB9A584AD4CBEE3FB1469E39F8D83A01');
const steamService = new CreateSteamCard(steamRepository);
export const steamGamesController = new CardSteamController(steamService);
