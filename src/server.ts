import express from 'express';
import { steamGamesController } from './controllers';

const app = express();
const PORT = 3333;

app.get('/steam-games', (req, res) => {
  return steamGamesController.handle(req, res);
});

app.listen(PORT, () => {
  console.log(`Server On => ${PORT}!`);
});
