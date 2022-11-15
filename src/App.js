import React from 'react'
import {BrowserRouter ,Routes ,Route } from 'react-router-dom'
import {Box as Container} from '@mui/material'
import { Feed, NavBar, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () =>(
    <BrowserRouter>
      <Container sx={{backgroundColor : "#000"}}>
        <NavBar/>
        <Routes>  
          <Route exact path="/" element={ <Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searTerm" element={< SearchFeed/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )

export default App