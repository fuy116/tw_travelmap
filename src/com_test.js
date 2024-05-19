
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
 


import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import './test.css';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { SpeedDial } from 'primereact/speeddial';
import { Paginator } from 'primereact/paginator';
export default function Testa() {
    const items = [
        {
            label: '新增文章',
            icon: 'pi pi-pencil',
       
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
       
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
       
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
     
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
       
        }
    ];
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div >
            <AppBar className='appBar' position="static">
                <Toolbar>
                <Typography variant="h6" color="primary">
                    Blog
                </Typography>
                </Toolbar>
            </AppBar>
            <Box className="hero">
                <Box>React Blog</Box>
            </Box>
      
            <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
        </div>
    )
}
