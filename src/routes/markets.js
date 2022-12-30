import { Router } from 'express';

const router = Router();

const marketsList = [
    {
        id: 1,
        shop: 'Kiwi',
        kilometers: 0.6,
    },
    {
        id: 2,
        shop: 'Rema1000',
        kilometers: 2,
    },
    {
        id: 3,
        shop: 'Meny',
        kilometers: 3.2,
    },
    {
        id: 4,
        shop: 'Sunn mat',
        kilometers: 2.6,
    },
    {
        id: 5,
        shop: 'Coop',
        kilometers: 3.5,

    }
]

router.get('/', (req, res) => {
    const { kilometers } = req.query;
    const parsedKm = parseInt(kilometers);
    if (!isNaN(parsedKm)) {
    const filteredStores = marketsList.find(d => d.kilometers <= parsedKm)
    }
    res.send(marketsList)
});

export default router;