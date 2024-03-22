import { Request, Response } from 'express';
import { ICreateSteamCard } from '../../services/interface/ISteamService';

export class CardSteamController {
  constructor(private readonly createSteamCard: ICreateSteamCard) {}

  async getCurrentGame(req: Request, res: Response) {
    const { steamId } = req.query;

    if (!steamId || typeof steamId !== 'string') {
      return res.status(404).json({ message: 'SteamId is required' });
    }

    const card = await this.createSteamCard.getCurrentGameCard(steamId);

    res.setHeader('Content-Type', 'image/svg+xml');

    return res.status(200).send(card);
  }
}
