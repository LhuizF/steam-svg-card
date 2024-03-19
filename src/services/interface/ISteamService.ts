import { IRecentlyGames, AppDetails } from '../../@types';

export interface ISteamService {
  getRecentlyPlayedGames(): Promise<IRecentlyGames[]>;
  getAppDetails(appId: number): Promise<AppDetails[]>;
}
