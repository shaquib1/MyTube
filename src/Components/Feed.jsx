import React from 'react'

import { useEffect , useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import {Sidebar ,Videos} from './'

import { FetchfromApi } from '../utils/FetchfromApi'


const Feed = () => {


const [selectCategory,setSelectCategory]=useState('New')
const [videos, setVideos] = useState([]);

useEffect(() => {
    FetchfromApi(`search?part=snippet&q=${selectCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectCategory]);



    return (
        <Stack sx={{
            flexDirection: {
                sx: "column", md: "row"
            }
        }}>

            <Box sx={{
                height: { sx: 'auto', md: '92vh' },
                borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 3 }
            }}>

            <Sidebar 
            selectCategory={selectCategory}
            setSelectedCategory={setSelectCategory}
            
            />

                <Typography className="copyright" 
                variant='body2' sx={{mt:1.5,
                color:'#fff'}}
                >
                    Copyright © 2023 MyTube
                </Typography>

            </Box>

            <Box p={2} sx={{overflowY:'auto',height:'90vh' , flex:2}}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{
                    color:'white'
                }}>
                   {selectCategory} <span style={{color:'#F31503'}}>Videos</span>
                </Typography>

                <Videos Videos={videos} />

            </Box>

        </Stack>
    )
}

export default Feed