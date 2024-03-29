export interface ISteamService {
  getCurrentGameCard(steamId: string): Promise<string>;
}
