import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { steamGamesController } from './controllers';
import { BadRequestError } from './errors/BadRequest';

const app = express();
const PORT = 3333;

app.get('/steam/:steamId/current-game', (req, rep, next) =>
  steamGamesController.getCurrentGame(req, rep, next),
);

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BadRequestError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: 'Internal Server Error',
  });
});

app.listen(PORT, () => {
  console.log(`Server On => ${PORT}!`);
});
