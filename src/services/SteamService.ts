import { IRecentlyGames, AppDetails } from '../@types';
import { ISteamService } from './interface/ISteamService';

export class SteamService implements ISteamService {
  getRecentlyPlayedGames(): Promise<IRecentlyGames[]> {
    throw new Error('Method not implemented.');
  }
  getAppDetails(appId: number): Promise<AppDetails[]> {
    throw new Error('Method not implemented.');
  }
}
