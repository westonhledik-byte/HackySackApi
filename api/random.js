import tricks from '../data/tricks.json';

export default function handler(req, res) {
  const random = tricks[Math.floor(Math.random() * tricks.length)];
  res.status(200).json(random);
}
