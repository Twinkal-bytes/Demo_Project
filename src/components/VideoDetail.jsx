import React from 'react'
import { Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Box } from '@mui/material'
import {Stack} from '@mui/material'
import {Typography} from '@mui/material'
import CheckCircle from '@mui/icons-material'

import {video} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
const VideoDetail = () => {
  const {id} = useParams()
  const[videoDetail , setVideoDetail] = useState(null)
  useEffect(()=>{
      fetchFromApi(`videos?part=snippets,statistics&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0]))
  },[id])
    // const {snippet:{title}} = VideoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column' , ms:"row"}}>
        <Box flex={1}>{/**Side Bar which will show sugeested video */}
          <Box sx={{width:'100%' ,position:'sticky',top:'86px'}}>{/* Video that going to load */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className="react-player"
            controls/>{/* React player to load video */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
