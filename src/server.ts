import 'dotenv/config';
import express from 'express';
import { steamGamesController } from './controllers';

const app = express();
const PORT = 3333;

app.get('/steam-games', steamGamesController.getCurrentGame);

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server On => ${PORT}!`);
});
