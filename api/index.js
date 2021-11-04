const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const anuncioRouter = require('./routes/anuncioRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/anuncios', anuncioRouter);

app.listen(3000, () => {
  console.log('App listening on port 3000')
});