export interface ICreateSteamCard {
  getCurrentGameCard(steamId: string): Promise<string>;
}
