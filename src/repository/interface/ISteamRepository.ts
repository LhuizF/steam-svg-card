import { IRecentlyGames, AppDetails } from '../../@types';

export interface ISteamRepository {
  getRecentlyPlayedGames(steamId: string): Promise<IRecentlyGames[]>;
  getAppDetails(appId: string): Promise<AppDetails>;
}
