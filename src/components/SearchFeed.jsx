import React from 'react'
import { useState, useEffect } from 'react'
import {Box , Typography} from '@mui/material'
import {Videos} from './'
import { fetchFromApi} from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

// import { categories } from '../utils/Constants'
const SearchFeed = () => {
  const [videos,setVideos] = useState([])  
  const {searchTerm} = useParams()

  //creating useEffect to call option function used for api from FetchFromApi file
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    // setVideos(null)
    .then((data)=>setVideos(data.items))
  },[searchTerm]) 
  return (
    <Box p={2} sx={{overflowY:'auto' ,height:'90vh', flex:2}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>

      {/* OnSearching redirect to video */}
     Search Results For: <span style={{color:'#F31503'}}> {searchTerm} </span> Videos
    </Typography>
    <Videos videos={videos}/>
  </Box>     
  )
}

export default SearchFeed
