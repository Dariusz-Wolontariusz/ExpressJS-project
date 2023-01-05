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
	// console.log('darek zapodaje ciastkiem', req.cookies);
	const { item } = req.params;
	const groceryItem = groceryList.find(i => i.item === item)
	res.send(groceryItem)
});

router.get('/shopping/cart', (req, res) => {
	const { cart } = req.session;
	if (!cart) {
		res.send('You don\'t have any items in a cart')
	}
	res.send(cart)
});

router.post('/shopping/cart/item', (req, res) => {
	const { item, quantity } = req.body;
	const cartItem =  { item, quantity };
	const { cart } = req.session;
	if (cart) {
		return req.session.cart.items.push(cartItem)
	} req.session.cart = {
			items: [cartItem],
	}
	res.sendStatus(201)
})

export default router;
