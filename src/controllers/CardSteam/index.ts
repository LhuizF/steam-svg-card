import { Request, Response } from 'express';
import { IController } from '../protocols';
import { ICreateSteamCard } from '../../services/interface/ISteamService';

export class CardSteamController implements IController {
  constructor(private readonly createSteamCard: ICreateSteamCard) {}
  async handle(req: Request, res: Response) {
    const { steamId } = req.query;

    if (!steamId || typeof steamId !== 'string') {
      return res.status(404).json({ message: 'SteamId is required' });
    }

    const card = await this.createSteamCard.getCard(steamId);

    return res.status(200).json(card);
  }
}
