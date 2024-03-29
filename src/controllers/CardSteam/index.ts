import { Request, Response } from 'express';
import { ISteamService } from '../../services/interface/ISteamService';

export class CardSteamController {
  constructor(private readonly steamService: ISteamService) {
    console.log('steamService', steamService);
  }

  async getCurrentGame(req: Request, res: Response) {
    const { steamId } = req.query;
    console.log('AUIII', this);

    if (!steamId || typeof steamId !== 'string') {
      return res.status(404).json({ message: 'SteamId is required' });
    }

    const card = await this.steamService.getCurrentGameCard(steamId);

    res.setHeader('Content-Type', 'image/svg+xml');

    return res.status(200).send(card);
  }
}
