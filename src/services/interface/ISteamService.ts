export interface ICreateSteamCard {
  getCard(steamId: string): Promise<any>;
}
