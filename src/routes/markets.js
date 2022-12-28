import { Router } from 'express';

const router = Router();

const marketList = [
    {
        shop: 'Kiwi',
    },
    {
        shop: 'Rema 1000'
    },
    {
        shop: 'Sunn mat'
    }
]

router.get('/', (req, res) => {
    res.send(marketList)
});

export default router;