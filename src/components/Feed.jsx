import React from 'react'
import { useState, useEffect } from 'react'
import {Box ,Stack , Typography} from '@mui/material'
import { bordserRight } from '@mui/system'
import {SideBar,Videos} from './'
import { fetchFromApi} from '../utils/fetchFromApi'
// import { categories } from '../utils/Constants'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])  

  //creating useEffect to call option function used for api from FetchFromApi file
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    // setVideos(null)
    .then((data)=>setVideos(data.items))
  },[]) 
  return (
    <Stack sx={{flexDirection : {sx :"column" ,md:"row"}}}>
      <Box sx={{height:{sx:"auto",md:'92vh'},borderRight:'1px solid #3d3d3d' ,px:{sx:0 ,md:2}}}>    
      
      {/* To Change State Of selCted Category */}
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>  
      
      {/* To display copiright statically */}
      <Typography className='copyright' variant='body2' sx={{mt :1.5 , color:'#fff'}}>
          @copyright 2022
      </Typography> 
      </Box> 
      <Box p={2} sx={{overflowY:'auto' ,height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>

          {/* OnCLick State Change for selected categories */}
         {selectedCategory} <span style={{color:'#F31503'}}> Videos </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>     
    </Stack>
  )
}

export default Feed
