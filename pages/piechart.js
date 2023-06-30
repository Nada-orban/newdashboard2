import { Box } from '@mui/material'
import React from 'react'
import Piechart2 from '../Components/Chart/Piechart2'
import Header from '../Components/Header'

function piechart() {
    return (
        <Box width="100%">
            <Header title="Pie Chart" subtitle={"Pie Chart information"}></Header>
            <Box height="70vh" justifyContent="center" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Piechart2 />
            </Box>
        </Box>
    )
}

export default piechart