const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));

//database
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
	})
	.then(() => console.log('Database Connected Successfully!'))
	.catch((err) => console.log('Error connecting to mongodb', err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
