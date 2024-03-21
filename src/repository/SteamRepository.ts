import { IRecentlyGames, AppDetails, IGetRecentlyPlayedGames } from '../@types';
import { ISteamRepository } from './interface/ISteamRepository';

export class SteamRepository implements ISteamRepository {
  private readonly steamApi = 'https://api.steampowered.com';
  private readonly steamStore = 'http://store.steampowered.com/api';

  constructor(private readonly key: string) {
    if (!key) {
      throw new Error('Steam API Key is required');
    }
  }

  async getRecentlyPlayedGames(steamId: string): Promise<IRecentlyGames[]> {
    const url = `${this.steamApi}/IPlayerService/GetRecentlyPlayedGames/v1/?key=${this.key}&steamid=${steamId}`;
    console.log(url);
    return await fetch(url)
      .then((response) => response.json())
      .then((data: IGetRecentlyPlayedGames) => {
        const games = data.response.games;

        return games;
      });
  }

  async getAppDetails(appId: string): Promise<AppDetails> {
    const url = `${this.steamStore}/appdetails?appids=${appId}`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const appDetails = data[appId].data;
        return appDetails;
      });
  }
}
