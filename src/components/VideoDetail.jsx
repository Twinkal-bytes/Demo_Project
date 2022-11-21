import React from 'react'
import { Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Box } from '@mui/material'
import {Stack} from '@mui/material'
import {Typography} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
const VideoDetail = () => {
  const {id} = useParams()
  const[videoDetail , setVideoDetail] = useState(null)
  const[videos ,setVideos] =useState(null)

  useEffect(()=>{
      fetchFromApi(`videos?part=snippets,statistics&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0]))

      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)//SideBar Video Liast Of YouTube
      .then((data)=>setVideos(data.items))
  },[id])
  if(!videoDetail?.snippet) return "Loading......"
    // const {snippet:{title,channelId,channelTitle},statistics:{viewCount ,likeCount}} = VideoDetail
  return (  
    <Box minHeight="95vh">
      <Stack direction={{xs:'column' , ms:"row"}}>
        <Box flex={1}>{/**Side Bar which will show sugeested video */}
          <Box sx={{width:'100%' ,position:'sticky',top:'86px'}}>{/* Video that going to load */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className="react-player"
            controls/>{/* React player to load video */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}<br/>
              {/* {videoDetail?.snippet?.channelId}<br/> */}
              {/* {videoDetail?.snippet?.channelTitle}<br/> */}
             {/* Views: {videoDetail?.statistics?.viewCount}<br/> */}
            Likes {videoDetail?.statistics?.likeCount}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{sm:'subtitle' ,md:'h6'}}>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px' }}/>
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant='body1' sx={{opacity:0.7}}>
                   Views {videoDetail?.statistics?.viewCount}
                  </Typography>
                  <Typography variant='body1' sx={{opacity : 0.7}}>
                    Likes {videoDetail?.statistics?.likeCount}
                  </Typography>
              </Stack>
            </Stack> 
          </Box>
        </Box>
      </Stack>
          <Box px={2} py={{md:1 ,xs:5}} justifyContent="center" alignItems="center">
              <Videos videos={videos} direction="coloumn"/>
          </Box> 
    </Box>
  )
}

export default VideoDetail
