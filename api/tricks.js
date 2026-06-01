import tricks from '../data/tricks.json';

export default function handler(req, res) {
  res.status(200).json(tricks);
}
