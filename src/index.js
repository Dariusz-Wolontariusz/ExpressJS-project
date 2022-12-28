const express = require('express');

const app = express();
const PORT = 3000;

groceryList = [
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



app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({
  extended: true

}
));


app.listen(PORT, () =>
	console.log(`Running Express server on port nr ${PORT}!`)
);

app.get('/groceries', (req, res) => {
	res.send(groceryList);
});

app.post('/groceries', (req, res) => {
//   console.log('darek loguje', req.body)
  groceryList.push(req.body)
  res.sendStatus(201);
});

app.get('/groceries/:item', (req, res) => {
	const { item } = req.params;
	const groceryItem = groceryList.find(i => i.item === item)
	res.send(groceryItem)
})
