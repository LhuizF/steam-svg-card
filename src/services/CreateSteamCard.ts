import { ISteamRepository } from '../repository/interface/ISteamRepository';
import { ICreateSteamCard } from './interface/ISteamService';

export class CreateSteamCard implements ICreateSteamCard {
  constructor(private readonly steamRepository: ISteamRepository) {}
  async getCard(steamId: string): Promise<any> {
    const recentlyGame =
      await this.steamRepository.getRecentlyPlayedGames(steamId);

    const games = await Promise.all(
      recentlyGame.map(async (game) => {
        const appDetails = await this.steamRepository.getAppDetails(
          game.appid.toString(),
        );

        return appDetails;
      }),
    );

    return games;
  }
}
