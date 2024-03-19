import { Request, Response } from 'express';
import { IController } from '../protocols';
import { ISteamService } from '../../services/interface/ISteamService';

export class SteamGamesController implements IController {
  constructor(steamService: ISteamService) {}
  async handle(req: Request, res: Response) {
    return Promise.resolve(null);
  }
}
