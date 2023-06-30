import { Box } from '@mui/material'
import React from 'react'
import Barchart2 from '../Components/Chart/Barchart2'
import Header from '../Components/Header'

function barchart() {
    return (
        <Box width="100%" >
            <Header title="Bar Chart" subtitle={"Bar Chart information"}></Header>
            <Box height="50vh" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Barchart2 />
            </Box>
        </Box>
    )
}

export default barchart