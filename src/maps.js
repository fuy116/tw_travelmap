import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import {Button} from 'primereact/button';
import './test.css';
import './homepage.css'
export default function Maps() {
  let params = useParams()
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Box className="hero">
                <Box>{params.city_id}</Box>
            </Box>
      <Button>Back</Button>
        </Link>
   
      
    </div>
  )
}




