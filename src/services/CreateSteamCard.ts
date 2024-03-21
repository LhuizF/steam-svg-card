import { IRecentlyGames } from '../@types';
import { ISteamRepository } from '../repository/interface/ISteamRepository';
import { ICreateSteamCard } from './interface/ISteamService';

interface IGameDetails extends IRecentlyGames {
  image: string;
  imagev2: string;
  totalHours: string;
  totalWeeksHours: string;
}

export class CreateSteamCard implements ICreateSteamCard {
  constructor(private readonly steamRepository: ISteamRepository) {}
  async getCard(steamId: string): Promise<any> {
    const recentlyGame =
      await this.steamRepository.getRecentlyPlayedGames(steamId);
    console.log(recentlyGame.length);
    const games: IGameDetails[] = await Promise.all(
      recentlyGame.map(async (game) => {
        const appDetails = await this.steamRepository.getAppDetails(
          game.appid.toString(),
        );

        const totalHours = (game.playtime_forever / 60).toFixed(1);
        const totalWeeksHours = (game.playtime_2weeks / 60).toFixed(1);

        return {
          ...game,
          image: appDetails.header_image,
          imagev2: appDetails.capsule_image,
          totalHours,
          totalWeeksHours,
        };
      }),
    );

    return this.renderCard(games[0]);
  }

  private renderCard(games: IGameDetails) {
    return `
    <svg width="460" height="215" xmlns="http://www.w3.org/2000/svg">

      <image href="https://cdn.cloudflare.steamstatic.com/steam/apps/${games.appid}/header.jpg" width="100%" height="100%" preserveAspectRatio="none"/>

      <rect x="0" y="0" width="100%" height="215" fill="url(#gradient)" />

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(0,0,0,0)" />
          <stop offset="10%" stop-color="rgba(0,0,0,0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,1)" />
        </linearGradient>
      </defs>

      <defs>
        <radialGradient id="gradientTop" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="10%" stop-color="rgba(0,0,0, 0.8)" />
          <stop offset="100%" stop-color="rgba(0,0,0, 0)" />
        </radialGradient>
      </defs>


      <circle cx="0" cy="0" r="140" fill="url(#gradientTop)" />

      <svg font-family='Arial' font-size="16" fill="white" font-weight="600" >
        <text x="10" y="32" font-size="28">${games.name}</text>

        <text x="10" y="162">Horas de jogo últimas 2 semanas</text>
        <text x="10" y="180">${games.totalWeeksHours}H</text>

        <text x="340" y="162">Horas de jogo</text>
        <text x="340" y="180">${games.totalHours}H</text>
      </svg>

    </svg>
  `;
  }
}
