import tricks from '../data/tricks.json' assert { type: 'json' };

export default function handler(req, res) {
  const pick = () => tricks[Math.floor(Math.random() * tricks.length)];
  res.status(200).json([pick(), pick(), pick()]);
}
