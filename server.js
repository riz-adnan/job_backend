const express = require('express');
const linkedIn = require('linkedin-jobs-api');
const cors = require('cors');
const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

app.post('/jobs', async (req, res) => {
  const queryOptions = req.body;

  try {
    const response = await linkedIn.query(queryOptions);
    console.log('Fetched jobs from LinkedIn:', response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching jobs from LinkedIn');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
