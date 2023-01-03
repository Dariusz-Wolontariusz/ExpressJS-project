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
	res.cookie('visited', true, {
		maxAge: 60000,
	})
	res.send(groceryList);
});

router.post('/', (req, res) => {
  groceryList.push(req.body)
  res.sendStatus(201);
});

router.get('/:item', (req, res) => {
	console.log('darek zapodaje ciastkiem', req.cookies);
	const { item } = req.params;
	const groceryItem = groceryList.find(i => i.item === item)
	res.send(groceryItem)
});

router.get('/cart', (req, res) => {

});

router.post('/cart/item', (req, res) => {
	const { item, quantity } = req.body;
	const cartItem =  { item, quantity };
	console.log(req.session);
	res.send(req.sessionID)
})

export default router;
