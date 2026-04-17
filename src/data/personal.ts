import type { PersonalInfo } from '@/types'

const personal: PersonalInfo = {
  name: 'Soham Pardeshi',
  // tagline: 'Software Engineer; Part-time Lecturer',
  bio: [
    `I like learning about things. There are many great reasons to learn, but my favorite is that learning something new lets me appreciate more jokes. The world is hilarious and absurd, and I am always glad when I can understand more of its humor.`,
    `That is partly why I love long conversations about how things work. Whether the subject is a technical system, a social incentive structure, or even just the rules of a game, I end up having a lot of fun. I am lucky to have many smart friends who know a great deal (and who have taught me a little bit) about pop culture, epistemology, sports, history, molecular biology, credit cards, neuroscience, video games, and politics.`,
  ],
  photo: '/profile.jpg',
  photoDark: '/profile-horns.jpg',
  links: [
    { label: 'GitHub', url: 'https://github.com/SohamPardeshi' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sohampardeshi/' },
    { label: 'Email', url: 'mailto:spard@cs.washington.edu' },
  ],
  interestsIntro: `To get a sense of my hobbies and taste, here is a curated list of  some things I have enjoyed in the past few years:`,
  interests: [
    {
      label: 'Books',
      icon: '📚',
      groups: [
        {
          genre: 'Fiction',
          entries: [
            [
              { text: 'I have read most things by '},
              { text: 'Brandon Sanderson', url: 'https://www.brandonsanderson.com' },
              { text: '. I love the grand scope of the Cosmere and its complex magic systems' },
            ],
            [
              { text: 'The Kingkiller Chronicles', url: 'https://www.goodreads.com/series/45262-the-kingkiller-chronicle'},
              { text: ' by ' },
              { text: 'Patrick Rothfuss', url: 'https://www.patrickrothfuss.com' },
              { text: ' has ridiculously good prose and foreshadowing' },
            ],
            [
              { text: 'Piranesi', url: 'https://www.goodreads.com/book/show/50202953-piranesi'},
              { text: ' by '},
              { text: 'Susanna Clarke', url: 'https://www.curtisbrown.co.uk/client/susanna-clarke' },
              { text: ' is creative and mind-bending in the best way' },
            ],
            [
              { text: 'Street Cultivation', url: 'https://www.goodreads.com/book/show/49626218-street-cultivation' },
              { text: ' by '},
              { text: 'Sarah Lin', url: 'https://www.goodreads.com/author/show/15619487.Sarah_Lin' },
              { text: ' is progression fantasy that really made me root for the protagonist' },
            ],
            [
              { text: 'The Discworld series', url: 'https://www.goodreads.com/series/40650-discworld'},
              { text: ' by ' },
              { text: 'Terry Pratchett', url: 'https://www.terrypratchettbooks.com' },
              { text: ' is downright hilarious' },
            ],
          ],
        },
        {
          genre: 'Personal Development',
          entries: [
            [
              { text: 'I became slightly more productive after reading ' },
              { text: 'Flow', url: 'https://www.goodreads.com/book/show/66354.Flow' },
              { text: ' by ' },
              { text: 'Mihaly Csikszentmihalyi', url: 'https://www.cgu.edu/people/mihaly-csikszentmihalyi/'},
            ],
            [
              { text: 'I try to practice ' },
              { text: 'radical acceptance', url: 'https://www.goodreads.com/book/show/213181082-radical-acceptance' },
              { text: ' to be more supportive to those around me' },
            ],
          ],
        },
        {
          genre: 'Comics',
          entries: [
            [
              { text: 'Growing up, I was a big fan of the ' },
              { text: 'Asterix', url: 'https://www.goodreads.com/series/41270-ast-rix' },
              { text: ' series by René Goscinny' }
            ],
          ],
        },
      ],
    },
    {
      label: 'Film',
      icon: '🎬',
      groups: [
        {
          genre: 'Movies',
          entries: [
            [{ text: 'Memories of a Murder', url: 'https://www.imdb.com/title/tt0353229/' }],
            [{ text: 'The Prestige', url: 'https://www.imdb.com/title/tt0482571/' }],
            [{ text: 'Fight Club', url: 'https://www.imdb.com/title/tt0137523/' }],
            [{ text: 'Knives Out 1', url: 'https://www.imdb.com/title/tt8946378/' }, { text: ' / ' }, { text: '2', url: 'https://www.imdb.com/title/tt11564570/' }, { text: ' / ' }, { text: '3' }],
            [{ text: 'Training Day', url: 'https://www.imdb.com/title/tt0139654/' }],
            [{ text: 'L.A. Confidential', url: 'https://www.imdb.com/title/tt0119488/' }],
            [{ text: 'Drive', url: 'https://www.imdb.com/title/tt0780504/' }],
            [{ text: 'Reservoir Dogs', url: 'https://www.imdb.com/title/tt0105236/' }],
            [{ text: 'Four Lions', url: 'https://www.imdb.com/title/tt1341167/' }],
            [{ text: 'My Cousin Vinny', url: 'https://www.imdb.com/title/tt0104952/' }],
            [{ text: 'Fantastic Mr. Fox', url: 'https://www.imdb.com/title/tt0432283/' }],
            [{ text: '3 Idiots', url: 'https://www.imdb.com/title/tt1187043/' }],
            [{ text: 'Homebound', url: 'https://www.imdb.com/title/tt14671048/' }],
          ],
        },
        {
          genre: 'TV Shows',
          entries: [
            [{ text: 'Silicon Valley', url: 'https://www.imdb.com/title/tt2575988/' }],
            [{ text: 'The Boys', url: 'https://www.imdb.com/title/tt1190634/' }],
            [{ text: 'Smiling Friends', url: 'https://www.imdb.com/title/tt13057512/' }],
            [{ text: 'The Pitt', url: 'https://www.imdb.com/title/tt22520424/' }],
          ],
        },
      ],
    },
    {
      label: 'Video Games',
      icon: '🎮',
      groups: [
        {
          entries: [
            [{ text: 'Civilization V / VI / VII' }],
            [{ text: 'Baba Is You' }],
            [{ text: 'Slay the Spire 1 & 2' }],
            [{ text: 'Balatro' }],
            [{ text: 'Stellaris' }],
            [{ text: 'Hollow Knight' }],
          ],
        },
      ],
    },
    {
      label: 'Board Games',
      icon: '🎲',
      groups: [{ entries: [[{ text: 'Add your favorites here' }]] }],
    },
    {
      label: 'Travel',
      icon: '✈️',
      groups: [{ entries: [[{ text: 'Add your favorites here' }]] }],
    },
  ],
}

export default personal
