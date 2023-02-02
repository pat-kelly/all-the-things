import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'
import NerdyThings from './pages/NerdyThings/NerdyThings'
import NatureThings from './pages/NatureThings/NatureThings'
import FluffyThings from './pages/FluffyThings/FluffyThings'

const App = () => {
  const bensThings = [
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]
  const nerdyThings = [
    {
      name: "board games",
      image: "https://imgs.xkcd.com/comics/board_games.png",  
      attributes: ["fun", "exciting", "betrayal of friendships", "huge time suck"],
    },
  ]

  const natureThings = [
    {
      name: 'tree',
      image:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      attributes: ['lovely', 'oxygenating', 'shade'],
    },
    {
      name: 'cuttlefish',
      image: 'https://images.unsplash.com/photo-1615708287937-3edd0ef5161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      attributes: ['intelligent', 'gorgeous', 'so cool'],
    },
    {
      name: 'sky',
      image: 'https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      attributes: ['beautiful', 'atmospheric?', 'dark'],
    },
  ]

  const laurensThings = [
    {
      name: "more_stuff",
      image: "public/self-portrait.png",  
      attributes: ["hehe-haha", "lololol", "okay", "cool"],
    },]
    
  const fluffyThings = [
    {
      name: 'cat',
      image:
        'https://imgs.xkcd.com/comics/cat.png',
      attributes: ['fluffy', 'playful', 'curious'],
    },
    {
      name: 'dog',
      image: 'https://imgs.xkcd.com/comics/dog.png',
      attributes: ['fluffy', 'loyal', 'friendly'],
    }
  ]

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-nerdy-things"
        element={<NerdyThings things={nerdyThings} />}
      />
      <Route
        path="/the-nature-things"
        element={<NatureThings things={natureThings} />}
      />
      <Route
        path="/the-fluffy-things"
        element={<FluffyThings things={fluffyThings} />}
      />
    </Routes>
  )
}

export default App
