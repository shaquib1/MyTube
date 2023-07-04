import React from 'react'
import { Button, Stack } from '@mui/material'

import { categories } from '../utils/constants'






const Sidebar = ({selectCategory,setSelectedCategory}) => (

    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
        }}
    >


        {categories.map((category) => (
            <button
                className='category-btn'

                onClick={()=>setSelectedCategory (category.name)}

                style={{
                    background: category.name === selectCategory && '#FC1503',
                    color: 'white'
                }}
            >
                <span style={{
                    color: category.name === selectCategory ? 'white' : 'red',
                    marginRight: '15px'
                }}
                >{category.icon}</span>
                <span style={{ opacity: category.name === selectCategory ? '1' : '0.7' }}

                >{category.name}</span>
            </button>
        ))

        }

    </Stack>

)

export default Sidebar