import React from 'react'

import { useEffect , useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'




const Feed = () => {
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

            <Sidebar />

                <Typography className="copyright" 
                variant='body2' sx={{mt:1.5,
                color:'#fff'}}
                >
                    Copyright © 2023 MetaTube
                </Typography>

            </Box>

        </Stack>
    )
}

export default Feed