import React from 'react'
import { Box } from '@mui/system'
import Typography  from '@mui/material/styles/createTypography'
import { CardContent } from '@mui/material'
import {CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'
import Videos from './Videos'
const ChannelCard = ({ChannelDetail}) => {
  return (
    <Box sx={{
              boxShadow:'none',
              borderRadius:'20px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:{xs:'356px' , md:'320px'},
              height:'326px',
              margin:'auto',
              marginTop:'-110px'
              }}>
                <Box display='flex' p='2'>
                  <Box sx={{mr:{sm:'100px'}}}/>
                    <Videos videos={Videos}/> 
                </Box>
        <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
          <CardContent sx={{displat:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
            <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={ChannelDetail?.snippet?.title}
            sx={{borderRadius:'50%',height:'180 px',width:'180px',mb:2 ,border:'1px solid #e3e3e3'}}/>
            <Typography variant="v6">
              {ChannelDetail?.snippet?.title}
              <CheckCircle sx={{fontSize:14 ,color:'gray', ml:'5px'}}/> 
            </Typography>
            {ChannelDetail?.statistics?.subscriberCount && (
              <Typography>
                {/* To show subscriber of channel */}
                {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()}Subscibers 
              </Typography>
            )}
          </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard