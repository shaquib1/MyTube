import React from 'react'

import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumnail , demoVideUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle} from '../utils/constants'

const VideoCard = ({video}) => {

  console.log(video);
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard