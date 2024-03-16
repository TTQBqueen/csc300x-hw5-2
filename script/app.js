const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
  {
    'joke': 'Why did the student eat his homework?',
    'response': 'Because the teacher told him it was a piece of cake!'
  },
  {
    'joke': 'What kind of tree fits in your hand?',
    'response': 'A palm tree'
  },
  {
    'joke': 'What is worse than raining cats and dogs?',
    'response': 'Hailing taxis'
  }
];
let lameJoke = [
  {
    'joke': 'Which bear is the most condescending?',
    'response': 'Pan-DUH'
  },
  {
    'joke': 'What would the Terminator be called in his retirement?',
    'response': 'The Exterminator'
  }
];

// Jokebook Categories
app.get('/jokebook/categories', (req, res) => {
  res.json(categories);
});

// Jokes in a category
app.get('/jokebook/joke/:category', (req, res) => {
  const category = req.params.category;
  const limit = req.query.limit;

  if (categories.includes(category)) {
    let jokes = category === 'funnyJoke' ? funnyJoke : lameJoke;

    if (limit) {
      jokes = jokes.slice(0, limit);
    }

    res.json(jokes);
  } else {
    res.status(400).json({'error': `no category listed for ${category}`});
  }
});

// Add a new joke
app.post('/jokebook/joke/new', (req, res) => {
  const { category, joke, response } = req.body;

  if (!category || !joke || !response || !categories.includes(category)) {
    res.status(400).json({'error': 'invalid or insufficient user input'});
  } else {
    const jokeObj = { joke, response };

    if (category === 'funnyJoke') {
      funnyJoke.push(jokeObj);
    } else if (category === 'lameJoke') {
      lameJoke.push(jokeObj);
    }
    Console.log(jokeObj);
    res.json(jokeObj);
  }
});

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});
