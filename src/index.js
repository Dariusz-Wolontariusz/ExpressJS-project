import express from 'express';
import groceriesRoute from './routes/groceries.js';
import marketsRoute from "./routes/markets.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.json());+
app.use(express.urlencoded({
  extended: true
}
));
app.use(cookieParser());

app.use('/api/groceries', groceriesRoute);
app.use('/api/markets', marketsRoute)

app.listen(PORT, () =>
	console.log(`Running Express server on port nr ${PORT}!`)
);
