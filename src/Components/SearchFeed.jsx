import React from 'react'

import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { Videos } from './'

import { FetchfromApi } from '../utils/FetchfromApi'

import { useParams } from 'react-router-dom'



const SeachFeed = () => {



  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();


  useEffect(() => {
    FetchfromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);



  return (


    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: 'white'
      }}>
        Search Result for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>

      <Videos Videos={videos} />

    </Box>
  )
}

export default SeachFeed