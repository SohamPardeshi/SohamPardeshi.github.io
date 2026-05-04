import type { PersonalInfo } from '@/types'

const personal: PersonalInfo = {
  name: 'Soham Pardeshi',
  pronouns: 'he/him',
  // tagline: 'Software Engineer; Part-time Lecturer',
  bio: [
    [
      { text: 'I am existentially-driven by the pursuit of humor. I subscribe to ' },
      { text: 'the incongruity theory', url: 'https://plato.stanford.edu/entries/humor/#HumoBadRepu:~:text=4.-,The%20Incongruity%20Theory,-The%20second%20account' },
      { text: ' that we find things funny when they subvert our expectations in a satisfying and logically consistent way.' },
    ],
    `This philosophy is why I love to learn! When I learn something new, it uncovers a gap between what I expected and what's actually true. Exploring that gap is both fun and funny for me.`,
    `That's why I feel very lucky to have many smart friends who know a great deal (and who teach me a little bit) about pop culture, epistemology, sports, history, molecular biology, architecture, credit cards, neuroscience, video games, and cars. Most of my free time is spent yapping about these topics with my friends or exploring my hobbies below.`,
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
              { text: ' has ridiculously good prose and foreshadowing. Fan theories for book 3 are crazy!' },
            ],
            [
              { text: 'Piranesi', url: 'https://www.goodreads.com/book/show/50202953-piranesi'},
              { text: ' by '},
              { text: 'Susanna Clarke', url: 'https://www.curtisbrown.co.uk/client/susanna-clarke' },
              { text: ' is trippy. I really loved Piranesi\'s voice and approach to exploring the House' },
            ],
            [
              { text: 'The ' },
              { text: 'Cradle series', url: 'https://www.goodreads.com/series/192821-cradle' },
              { text: ' by '},
              { text: 'Will Wight', url: 'https://www.goodreads.com/author/show/7125278.Will_Wight' },
              { text: ' is a  progression fantasy which has the most satisfying ending I\'ve ever read' },
            ],
            [
              { text: 'I am ~12 books into the always hilarious ' },
              { text: 'Discworld series', url: 'https://www.goodreads.com/series/40650-discworld'},
              { text: ' by ' },
              { text: 'Terry Pratchett', url: 'https://www.terrypratchettbooks.com' },
              { text: '.' },
            ],
          ],
        },
        {
          genre: 'Personal Development',
          entries: [
            [
              { text: 'I became slightly more productive after learning about ' },
              { text: 'energy journaling', url: 'https://medium.com/leapers/technique-keeping-an-energy-diary-4d59fe9a39f8' },
              { text: ' and ' },
              { text: 'flow states', url: 'https://www.goodreads.com/book/show/66354.Flow' },
            ],
            [
              { text: 'I am trying to practice ' },
              { text: 'radical acceptance', url: 'https://www.goodreads.com/book/show/213181082-radical-acceptance' },
              { text: ' to be more supportive of those around me' },
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
          columns: 3,
          entries: [
            [{ text: 'The Prestige', url: 'https://www.imdb.com/title/tt0482571/' }],
            [{ text: 'L.A. Confidential', url: 'https://www.imdb.com/title/tt0119488/' }],
            [{ text: 'Fantastic Mr. Fox', url: 'https://www.imdb.com/title/tt0432283/' }],
            [{ text: 'Reservoir Dogs', url: 'https://www.imdb.com/title/tt0105236/' }],
            [{ text: 'Fight Club', url: 'https://www.imdb.com/title/tt0137523/' }],
            [
              { text: 'Knives Out 1', url: 'https://www.imdb.com/title/tt8946378/' },
              { text: ' / '},
              { text: '2', url: 'https://www.imdb.com/title/tt11564570/' },
              { text: ' / ' },
              { text: '3', url: 'https://www.imdb.com/title/tt14364480/' },
            ],
            [{ text: 'Memories of Murder', url: 'https://www.imdb.com/title/tt0353969/' }],
            [{ text: 'Tape', url: 'https://www.imdb.com/title/tt0275719/' }],
            [{ text: 'Training Day', url: 'https://www.imdb.com/title/tt0139654/' }],
            [{ text: 'Exam', url: 'https://www.imdb.com/title/tt1258197/' }],
            [{ text: 'Drive', url: 'https://www.imdb.com/title/tt0780504/' }],
            [{ text: 'Rashomon', url: 'https://www.imdb.com/title/tt0042876/' }],
            [{ text: 'My Cousin Vinny', url: 'https://www.imdb.com/title/tt0104952/' }],
            [{ text: 'Homebound', url: 'https://www.imdb.com/title/tt26733325/' }],
            [{ text: 'Four Lions', url: 'https://www.imdb.com/title/tt1341167/' }],
          ],
        },
        {
          genre: 'TV Shows',
          columns: 3,
          entries: [
            [{ text: 'Silicon Valley', url: 'https://www.imdb.com/title/tt2575988/' }],
            [{ text: 'The Boys', url: 'https://www.imdb.com/title/tt1190634/' }],
            [{ text: 'The Twilight Zone', url: 'https://www.imdb.com/title/tt0052520/' }],
            [{ text: 'Chernobyl', url: 'https://www.imdb.com/title/tt7366338/' }],
            [{ text: 'House', url: 'https://www.imdb.com/title/tt0412142/' }],
            [
              { text: 'Star Trek TNG', url: 'https://www.imdb.com/title/tt0092455/' },
              { text: ' / ' },
              { text: 'DS9', url: 'https://www.imdb.com/title/tt0106145/' },
              { text: ' / ' },
              { text: 'VOY', url: 'https://www.imdb.com/title/tt0112178/' },
            ],
            [{ text: 'Breaking Bad', url: 'https://www.imdb.com/title/tt0903747/' }],
            [{ text: 'The Pitt', url: 'https://www.imdb.com/title/tt31938062/' }],
            [{ text: 'Sapne vs. Everyone ', url: 'https://www.imdb.com/title/tt30263074/' }],
            [{ text: 'Better Call Saul', url: 'https://www.imdb.com/title/tt3032476/' }],
            [{ text: 'Smiling Friends', url: 'https://www.imdb.com/title/tt12074628/' }],
            [{ text: 'Fullmetal Alchemist: Brotherhood', url: 'https://www.imdb.com/title/tt1355642/' }],
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
            [
              { text: 'It is difficult to schedule long sessions with friends, but I enjoy playing multiplayer empire-building games. I have a few hundred hours across ' },
              { text: 'Civilization V', url: 'https://store.steampowered.com/app/8930/Sid_Meiers_Civilization_V/' },
              { text: ' / ' },
              { text: 'VI', url: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/' },
              { text: ' and ' },
              { text: 'Stellaris', url: 'https://store.steampowered.com/app/281990/Stellaris/' },
              { text: '.' },
            ],
            [
              { text: 'I\'ve only played a small bit, but I wholeheartedly recommend ' },
              { text: 'Baba Is You', url: 'https://store.steampowered.com/app/736260/Baba_Is_You/' },
              { text: '. It\'s just so creative...' },
            ],
            [
              { text: 'I have ' },
              { text: 'Slay the Spire', url: 'https://store.steampowered.com/app/646570/Slay_the_Spire/' },
              { text: ' and ' },
              { text: 'Balatro', url: 'https://store.steampowered.com/app/2379780/Balatro/' },
              { text: ' on my phone. I\'ve reached A20 on all characters in the former!' },
            ],
            [
              { text: 'I completed  ' },
              { text: 'Hollow Knight', url: 'https://store.steampowered.com/app/367520/Hollow_Knight/' },
              { text: ' because of all of the hype around '},
              { text: 'Silksong', url: 'https://store.steampowered.com/app/1675200/Hollow_Knight_Silksong/' },
              { text: ' but it was hard enough that I decided to skip the latter.'},
            ],
          ],
        },
      ],
    },
    {
      label: 'Board Games',
      icon: '🎲',
      groups: [
        {
          entries: [
            [
              { text: 'I love the Sherlock Holmes Consulting Detective series. I\'ve completed all of the cases in ' },
              { text: 'The Baker Street Irregulars', url: 'https://boardgamegeek.com/boardgame/296345/sherlock-holmes-consulting-detective-the-baker-str' },
              { text: ' and am almost done with ' },
              { text: 'The Thames Murders & Other Cases', url: 'https://boardgamegeek.com/boardgame/2511/sherlock-holmes-consulting-detective-the-thames-mu' },
              { text: '.' },
            ],
            [
              { text: 'My friends and I have completed A13 for ' },
              { text: 'Slay The Spire: The Board Game', url: 'https://boardgamegeek.com/boardgame/338960/slay-the-spire-the-board-game' },
            ],
            [
              { text: 'I have played some other strategy games, including ' },
              { text: 'Terra Mystica', url: 'https://boardgamegeek.com/boardgame/134441/terra-mystica' },
              { text: ', '},
              { text: 'Tzolk\'in', url: 'https://boardgamegeek.com/boardgame/120677/tzolk-in' },
              { text: ', '},
              { text: 'Caylus', url: 'https://boardgamegeek.com/boardgame/18602/caylus' },
              { text: ', and '},
              { text: 'Keyflower', url: 'https://boardgamegeek.com/boardgame/122515/keyflower' },
              { text: '.' },
            ]
          ] 
        }
      ],
    },
  ],
  // ISO 3166-1 alpha-2 codes
  visitedCountries: [
    'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'DE', 'EG', 'ES', 'FR', 'GB', 'GE', 'GR', 'HU', 'IN', 'IT', 'LK', 'LU', 'MX', 'NO', 'PT', 'RU', 'SE', 'US', 'VA',
  ],
  travelIntro: `I have been lucky to travel to many places for work and holiday! This map greatly overestimates how much of the world I have actually seen. In most cases, I have only visited a few cities in each location. I would love to map my travels precisely, but the data is difficult to compile. Here is a best-effort attempt:`,
  travelNote: `Every map projection has tradeoffs,. The Natural Earth projection used here is not free of controvery. But I chose it because it looks nice!`,
}

export default personal
