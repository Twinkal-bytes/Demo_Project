import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { fetchFromApi } from '../utils/fetchFromApi'
const ChannelDetail = () => {
  const[channelDetail ,setChannelDetail] = useState(null)
  const [videos , setVideos] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    console.log("channels&Videos",channelDetail,videos)
    //For Channel Detail
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.item[id]))

    //For Search
    fetchFromApi(`search?channelId=${id}&part=snippet&id=${id}&order=date`)
    .then((data)=>setVideos(data?.item[0]))
  })
  return (
    <Box>
      <div style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex :10,
        height:'300px'
      }}
      />        
    </Box>
  )
}

export default ChannelDetail
