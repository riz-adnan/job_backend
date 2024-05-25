const express = require('express');
const linkedIn = require('linkedin-jobs-api');
const cors = require('cors');
const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

app.get('/jobs', async (req, res) => {
  const queryOptions = {
    keyword: 'product manager',
    location: 'India',
    dateSincePosted: 'past Week',
    jobType: 'full time',
    remoteFilter: 'remote',
    salary: '100000',
    
    limit: '10'
  };

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
