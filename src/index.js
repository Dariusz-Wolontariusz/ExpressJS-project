import express from 'express';
import groceriesRoute from './routes/groceries.js';
import marketsRoute from './routes/markets.js';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(cookieParser());

app.use(
	session({
		secret: 'ABUDABIDU',
		resave: false,
		saveUninitialized: false,
	})
);


app.use('/api/groceries', groceriesRoute);
app.use('/api/markets', marketsRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () =>
	console.log(`Running Express server on port nr ${PORT}!`)
);
