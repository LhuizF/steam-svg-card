import 'dotenv/config';
import express from 'express';
import { steamGamesController } from './controllers';

const app = express();
const PORT = 3333;

app.get('/steam-games', async (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  return await steamGamesController.handle(req, res);
});

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server On => ${PORT}!`);
});
