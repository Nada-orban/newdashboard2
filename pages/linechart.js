import React from 'react'
import Linechart2 from '../Components/Chart/Linechart2'
import Header from '../Components/Header'
import { Box } from "@mui/material"

function line() {
    return (
        <Box width="100%" >
            <Header title="Line Chart" subtitle={"Line Chart information"}></Header>
            <Box height="50vh" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Linechart2 />
            </Box>
        </Box >
    )
}

export default line