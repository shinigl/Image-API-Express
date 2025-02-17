const express = require('express');
const app = express();
const data = require('./imageData')

const jokeData=[

  {
    setup: "Why don’t skeletons fight each other?",
    punchline: "They don’t have the guts."
  },
  {
    setup: "What do you get when you cross a snowman and a vampire?",
    punchline: "Frostbite."
  },
  {
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field."
  },
  {
    setup: "Why don’t eggs tell jokes?",
    punchline: "They’d crack each other up."
  },
  {
    setup: "What do you call fake spaghetti?",
    punchline: "An impasta!"
  },
  {
    setup: "Why did the golfer bring two pairs of pants?",
    punchline: "In case he got a hole in one."
  },
  {
    setup: "How do you organize a space party?",
    punchline: "You planet."
  },
  {
    setup: "What did one ocean say to the other ocean?",
    punchline: "Nothing, they just waved."
  },
  {
    setup: "Why don’t some couples go to the gym?",
    punchline: "Because some relationships don’t work out."
  },
  {
    setup: "What’s orange and sounds like a parrot?",
    punchline: "A carrot."
  }
]

app.get('/', (req, res) => {
  res.header({ "Header": "Random Image API" });
  const randomImage = data[Math.floor(Math.random()*data.length)]
  res.json(randomImage);
});

// Get random joke
app.get('/jokes', (req, res) => {
  res.header({ "Header": "Random Jokes API" });
  const randomJoke = jokeData[Math.floor(Math.random()*jokeData.length)]
  res.json(randomJoke);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
