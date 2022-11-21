import React from 'react'
import { Stack, Box } from '@mui/system'
import {VideoCard , ChannelCard} from './'
const Videos = ({ videos }) => {
  console.log(videos)
  if(!videos?.length)return 'Loading....'
  return (
    <Stack direction="row" flexWrap ="wrap" justifyContent="start" gap={2}>
      {videos.map((item ,index)=>(<Box key={index}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos