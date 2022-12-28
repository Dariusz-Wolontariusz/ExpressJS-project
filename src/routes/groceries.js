import { Router } from 'express';

const router = Router();

const groceryList = [
	{
		item: 'chili',
		quantity: 7,
	},
	{
		item: 'lime',
		quantity: 3,
	},
	{
		item: 'mint',
		quantity: 1,
	},
];


router.get('/', (req, res) => {
	res.send(groceryList);
});

router.post('/', (req, res) => {
//   console.log('darek loguje', req.body)
  groceryList.push(req.body)
  res.sendStatus(201);
});

router.get('/:item', (req, res) => {
	const { item } = req.params;
	const groceryItem = groceryList.find(i => i.item === item)
	res.send(groceryItem)
});

export default router;
