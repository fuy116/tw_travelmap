import React from 'react'
import { Link, useParams } from 'react-router-dom'

import {Button} from 'primereact/button';

export default function Maps() {
  let params = useParams()
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Button>Default</Button>
        </Link>
      <h1>{params.city_id}</h1>
      
    </div>
  )
}




