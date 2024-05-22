import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate } from 'react-router-dom';
import './homepage.css'
export default function Home() {

    const [pop, setPop] = useState('');
    const navigate = useNavigate();
    const handleClick = (event) => {
   
        const target = event.target;

        if (target.tagName === 'path') {

           // console.log("Clicked:", target.getAttribute('name'));
            const locationName = target.getAttribute('name');
            setPop(target.getAttribute('name'));
            console.log(`/maps/${locationName}` )
            navigate(`/maps/` + locationName);
        }

    };

    return (
        
        <div onClick={handleClick}>

            <svg width="1000" height="1000" fill="#6f9c76" stroke="#ffffff"

                strokeLinecap="round" strokeLinejoin="round" strokeWidth=".5"

                viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">

                {<svg baseprofile="tiny" fill="#6f9c76" height="1000" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" version="1.2" viewbox="0 0 1000 1000" width="1000" xmlns="http://www.w3.org/2000/svg" Tooltipdata-tooltip-content="Hello world!">

                    <g id="path" >

                        <path d="M181.2 423.5l0 0.1-1.1-0.4-0.3-0.4 0.2-0.4 0.4-0.8-1.3-0.9-0.2-0.3-0.1-0.1-2.5-1.9-1.8-1.9-2.7 1-1.3 1.6 0.2 0.7-0.1 0.6-0.3 0.2-0.3-0.1-0.4 2.4-5 5.9-11.4-4.1 0.2 1-0.2 1-0.3 0.1 1.1 1.1-0.4 8.2-3.3 2.6 2.5 2.7-1.4-0.6-1.9-0.2-1.7-0.7-0.9-1.5 0.3-0.6 1.6-1.9 0.5-1 0.1-1.4 0-1.8-0.6-3.1-1.2-3-0.2-1.6 1.1-0.6 5.5-2.7 7.2 4.7 5-0.6 0.8-6.3 1.7-3.9 5.3-1.1 5.2 4.7 2 5.3z m0.2 10.5l0.3-2.1 0.3 0-0.2 1.7-0.4 0.4z m0.9-5l-1-3 0.1-0.7 0.3-0.4 0.8 2.4-0.2 1.7z" id="TWKIN" name="金門">

                        </path>

                        <path d="M406.3 605.4l3.4 6.2 0.9 2.9-0.4 2.2-1.4-1.4-1.9-1.3-2-0.4-2.8 1.6-2.1 0.3-1 0.5-0.5 1.1-0.8 2.9-0.5 0.9-3.4 2-3.4 0.5-3.5-1.4-3.5-3.5 0.9-1.8 1.9 2.3 2.9 0.6 3.1-0.8 2.6-2.1-1.8-0.7-1.4-0.8-1.1-1.2-1-1.6-0.4 0.7 0 0.2-0.2 0.2-0.7 0.4-0.2-2.9 0.2-2.9 1.3 0 1.5 0.4 5.3-3.4 3.4-1.1-0.9 3.2-0.4 0.9 2.9-0.9 2.2 0.3 1.6-0.2 1.2-1.9z" id="TWPEN" name="澎湖">

                        </path>

                        <path d="M471.2 47.6l0.1 0.6-0.3 0-0.7 0.1-0.5 0.1-0.1-0.9 0.3-0.4 0.1-0.1-0.1-0.3-0.1 0-0.1-0.1 0.4-0.5 0.2-0.1 0.4-0.2 0.2-0.3 0.6 1.3-0.6 0.7 0.2 0.1z m-12.4 22.5l-0.1-0.3-0.2 0.5 0.2 0.7 0.3 0.3 0.3 0.1 0.4 0.1 0.3 0 0.5 0.1 0.3 0.2 0.1 0.5 0.2-0.3 0.6-0.1 0.4-0.3 0.3-0.2 0-0.5 0.1-0.5 0.6-0.7 0.1 0 0.2-0.1 0.6 0.1 0.5 0 0.3 0.1 0.1 0 0.5 0 0.7 0.1 0.8-0.5 0 0.3-0.3 0.3-0.2 0.4-0.3 0-0.2 0.2-0.2 0.4 0 0.5-0.1 0.3 0 0.1-0.3 0.4-0.3 0.5-0.1 0.1-0.3 0.2-0.2-0.4-0.2 0-0.7 0.1-0.2 0.3-0.4 0.6-1 1-0.2 0-0.4-0.3-0.7-0.1-0.6 0.1-0.2 1.2-0.2 0.1-0.7 0.1-0.1-0.3-0.4-0.5-0.2-0.2-0.5 0.1-0.6 0.1-0.9-0.3-0.3-1 0.3-0.6 0.4-0.3 0.4-0.4 0.3-0.7-0.7-0.5 0.4-0.5 0.4 0 0.2 0 0.1-0.5-0.5-0.8 0-0.8 0.3-0.4 0.4 0 0.3 0.4 0.3 0.1 0.1 0 0.1 0 0.5 0.3-0.3 0.9-0.1 0.2z m12.6-10.9l-0.4 0-0.6 0-1.1-0.3-0.4 0.7-0.4 0.1-0.2 0.2-0.3 0.4 0 0.7 0.2 0.7 0 0.6-0.2 0.9 0.1 0.4 0.3 0.1 0.1 0.3-0.5 0.2-0.9-0.2-0.5 0.2 0-1 0.1-1.5 0.3-1.4 0.3-0.5-0.2-0.4 0-0.6 0.1-0.2 1.1-0.1 0.5-0.6 0.5-0.2 0.6-0.3 1-0.9 0.3-1 0.5-0.3 0.6-0.1 0.4-0.3 0.6 0.1 0.1 0.5 0.3 0.4 0.1 0 0.3 0 0 0.9 0 0.9 0.7-0.7 0.2 0 0.6 0 0.1 0.1 0 0.3 0 0.9-0.7 0.2 0.1 0.5 0.3 0.2 0 0.3 0 0.7-0.5-0.7-0.2-0.7-0.5-0.7-0.7 0-0.5 0-0.3 0.2-0.4 0.3-0.5 0.1-0.4 0.6z m2.1-5.6l-0.4 0.2-0.3 0-0.7 0 0.1-0.7 0.7-0.2 0.1-0.4 0.7-0.1 0.7-0.2-0.9 1.4z" id="TWLIE" name="馬祖">

                        </path>

                        <path d="M657.2 325.1l6.4-10.3 5-5.9 5.2-4.4 13.2-4.4 3.1-1.9 2.7-2.4 3.3-1.8 6.4-2.3 14.5-2.6 3 3.3 4.6 2.2 3.4 2.2 2.3 2.1 2.9 0.7 3.1 1.6 3.7 5.4 0.3 2.9-0.7 3-2.4 2.5-9.4 2.8-2.7 2.9 0.2 4.5-0.8 4.1 0.8 3.7 3.8 3.7 0.8 3.7-1 4.8 3.7 2.1 5.3-0.3 3.7 1.4 6 8.9-1 3.8-2.3 2.7 0.6 3.7 1 4.1 6.4 6 1.8 4-2.2 0.6-3.9 2.8 2.3 9-1.6 2.7-2.5 1-2.3-0.5-2.9 1.1-0.3 1.1-3.5-1.5-5.2-3-2.9-2.1-4-0.7-4.5-2.6-3.7-2.9-0.4-3.1 3.3-4.7 1.4-5.6-1.2-5.2-0.2-3.6-2.5-1.9-3.1-1.6-1.9-3.3-2.4-2.5-2.8 0.2-2.8-0.5-2.2-2.2-3-2.2-4.8-1.5-2.4-2.7 0.8-4.2-2.6-3-4.9-1.6-3-1.4-3.1-0.9-3.6-1.4-2.9-6.3-3.3-2.2-9.8 0.7-2.3-0.8z" id="TWTAO" name="桃園">

                        </path>

                        <path d="M646.3 345.6l0.1-0.1 1.1-1.6 0.4-2.7 0.6-2.1 1.5-2.1 1.9-1.6 1.8-0.6-0.1-0.9 0.5-2.1 1.6-4.4 1.5-2.3 2.3 0.8 9.8-0.7 3.3 2.2 2.9 6.3 3.6 1.4 3.1 0.9 3 1.4 4.9 1.6 2.6 3-0.8 4.2 2.4 2.7 4.8 1.5 3 2.2 2.2 2.2 2.8 0.5 2.8-0.2 2.4 2.5 1.9 3.3 3.1 1.6 2.5 1.9 0.2 3.6 1.2 5.2-1.4 5.6-3.3 4.7 0.4 3.1 3.7 2.9 4.5 2.6 4 0.7 2.9 2.1 5.2 3 3.5 1.5-1.7 4.7-1 3.4 0.4 3.2-2.7 4.2-10.1 10.2-3.1 7.5-2-0.5-7.7 0.7-0.5 0.4-0.5-3.5-3.3-5.6-2.3-2.4-1-3.1-3.6-2.9-9.1 2.3-3.4-0.4-4.9 0.4-5.5 1.5-3-0.7 0.7-3.7 0.9-3.3-0.7-2.9-0.7-2.1 0.7-2.3 0.5-2.4 0.3-2.8-0.6-3.8-2.7-2.4-8.8-4.2-4.3-3.2-2.8-3.2-3.2-8 1.8-2.2 1.6-4.1 2.5-3.1 4.2-1.7 3.7-0.6 1.7-1 0.7-2.7-1.3-2.6-2.8-2.8-3.9-2-10.9-3.5-6-2.6z" id="TWHSQ" name="新竹">

                        </path>

                        <path d="M638.4 367.7l0.8-3 4-8.2 1.6-2.1 0.5-1.2 0-1.2-0.5-1.3-0.8-1.6 1.1-2.2 1.2-1.3 6 2.6 10.9 3.5 3.9 2 2.8 2.8 1.3 2.6-0.7 2.7-1.7 1-3.7 0.6-4.2 1.7-2.5 3.1-1.6 4.1-1.8 2.2-0.2 0.2-3.3 0.8-3.1-1.3-2-2.7-3-1.9-5-1.9z" id="TWHSZ" name="新竹市">

                        </path>

                        <path d="M590.8 428.5l5.2-5.8 1.3-2.9 0.7-4.8 1.5-4 4.3-7.5 1.2-4.5 1.1-2 4.8-1.4 1.4-1.5 0.8-1.9 1-1.8 3-3.2 3.4-2.4 4-1.1 5.2 1-0.7-3.9 1.9-2.7 2.7-2.7 1.3-4.2 0.6-1.3 2.6-1.3 0.3-0.9 5 1.9 3 1.9 2 2.7 3.1 1.3 3.3-0.8 0.2-0.2 3.2 8 2.8 3.2 4.3 3.2 8.8 4.2 2.7 2.4 0.6 3.8-0.3 2.8-0.5 2.4-0.7 2.3 0.7 2.1 0.7 2.9-0.9 3.3-0.7 3.7 3 0.7 5.5-1.5 4.9-0.4 3.4 0.4 9.1-2.3 3.6 2.9 1 3.1 2.3 2.4 3.3 5.6 0.5 3.5-2.7 1.9-1.3 4-3.5 1.5-3.9-0.1-3 2.2-3.3 3.1-4.2 2.4-8.4 6.6-4.9 2-6.4 3.5-3.9-1.6-3.6-4-4.4-1.7-7.1-0.6-4 2.4-0.6 5.3-3.7 2-8.8 0.5-8.4-4.8-4.7-0.9-5.3-2.6-10.9-8-4.5-3.9-3.4-3.6-6.6-10.3z" id="TWMIA" name="苗栗">

                        </path>

                        <path d="M563.1 480.3l0.5-0.6 0.5-2.4 2.4-1.9 1.6-4.7 1.9-8.8 6.7-11.7 2.1-7.1 2.4-4 9.6-10.6 6.6 10.3 3.4 3.6 4.5 3.9 10.9 8 5.3 2.6 4.7 0.9 8.4 4.8 8.8-0.5 3.7-2 0.6-5.3 4-2.4 7.1 0.6 4.4 1.7 3.6 4 3.9 1.6 6.4-3.5 4.9-2 8.4-6.6 4.2-2.4 3.3-3.1 3-2.2 3.9 0.1 3.5-1.5 1.3-4 2.7-1.9 0.5-0.4 7.7-0.7 2 0.5 2.6 0.8-0.5 4 1.1 2.6 3.5 0.8 3.2 1.9 2.7 1.8 2.8-0.4 3.4-1.7 3.6 0 4.2 3.4-3.4 3.5-0.3 3-1.7 4.5-5.4 3.4-2.2 3.6-0.9 3.7-2.2 2.7-2.5 1.3-0.9 1.4-2 1.5-9.6-0.9-3.4-0.8-3.4 0.2-8 3.2-4.5 0.7-4.4 0.2-6.4 3.3-3.2 0.6-3.6 2.1-5.7 5.5-3.6 1.4-4.8-0.1-3.4 2.8-1.9 3.9-2.5 0.7-6.4-4.8-2.2 1.4-4.2 5.5-4.3 0.2-7.3-1.1-4.6 2.2-2.7 6.1-5.4 10.4-3.6 3.4-3 0.5-13-1.8-3-0.1-0.1-1-3.9-2.6-3.1-0.5-0.9-2.5 0-2.8-1.4-2.9-2.3-3.6-3.2-2.6-8.5-2.5-3.3-3.9-0.7-5.5-1.9-4.6-2.9-2.5-4.2-1.3z" id="TWTXG" name="臺中市">

                        </path>

                        <path d="M519.2 556.7l0.6-1 1.1-5.1 0.9-2.1 5.1-4.9 1.5-2.1 1.9-5.6 3-5.6 4.2-11.6 1.9-3.3 2.2-2.2 1.8-1.2 1.5-0.8 1.2-1 0.4-2.2 0.9-2 3.7-2.9 0.8-2.2 0.4-7.2 0.7-2 1.9-1.9 8.2-9.5 4.2 1.3 2.9 2.5 1.9 4.6 0.7 5.5 3.3 3.9 8.5 2.5 3.2 2.6 2.3 3.6 1.4 2.9 0 2.8 0.9 2.5 3.1 0.5 3.9 2.6 0.1 1 0 2.6-3.1 1.1-0.9 2.1 0.4 2.9-1.4 3.3-1.2 3.9-0.1 4.1-0.8 4.7-0.7 9.7 1.5 4.5 2.6 2.4 2.8 1 4.1 2.1-0.7 2.5-2.8 1.1-1.8 1.7-1.7 1.1-0.7 0.5-8.7-1.7-4.2 0.1-8.7-4.4-14.2-1.6-8.4-3.2-4.8-1.3-5.4-0.3-15.9 1.9-5.5-3.2z" id="TWCHA" name="彰化">

                        </path>

                        <path d="M496.5 622.6l3.4-3.7-0.2-11.8 0.5-8.9 2-7 3.2-5.6 0.9-7.2 1.7-6.3 0.9-2.2 4.4-5.8 0.7-2 0.6-1.1 4-3.1 0.6-1.2 5.5 3.2 15.9-1.9 5.4 0.3 4.8 1.3 8.4 3.2 14.2 1.6 8.7 4.4 4.2-0.1 8.7 1.7 0.7-0.5 1.4 5.2-1.5 3.4-0.7 5.2 0.7 5.5-1.3 3.7-0.7 4.2 2.8 3.4 4.2 1.8 4.9-1.5 6-0.6 1.9 2.5-0.4 0-0.3 3.6 0 2.5-2.8 0.9-8.4 1.7-4.6 0.5-1.7-2.9-3.4-2.4-6 1.7-2.7 0.4-9.1-3.3-3.6-4.2-3.8-3.4-4.9 0.3-9.1 1.7-5.2 1.4-11.8 6.8-2.7 2.7-3.2 1.7-5 4.1-3.9 0.6-1.4 2.2-1.3 3.5-2.8 2.3-4.4-0.1-6-3.3-7.6 0.8-0.1 0.1-0.7 0z" id="TWYUN" name="雲林">

                        </path>

                        <path d="M495.1 664.4l2.8-0.2 2.3-1 1 0.3-0.6-2.3-1.6 1.2-1.3-0.4-1.8-0.1 0-2.3 1.8-4.1 2.6-0.2 3.9 0-2.6-7.5-3.1-5.8 1.4-2.6 0-1.4-2.2-1.1 0.3-1.2 1.3-1.5 0.6-1.9 3-3.8-6.2 0.4-0.2-6.3 0.7 0 0.1-0.1 7.6-0.8 6 3.3 4.4 0.1 2.8-2.3 1.3-3.5 1.4-2.2 3.9-0.6 5-4.1 3.2-1.7 2.7-2.7 11.8-6.8 5.2-1.4 9.1-1.7 4.9-0.3 3.8 3.4 3.6 4.2 9.1 3.3 2.7-0.4 6-1.7 3.4 2.4 1.7 2.9 4.6-0.5 8.4-1.7 2.8-0.9 0-2.5 0.3-3.6 0.4 0 4.4 0.5 4.8 1.9 3 0.8 3.7 2.1-0.3 3.8-2.1 3.7 0.9 3.4 1.9 4.7 0.3 4.2 0.8 2.8 5.5 1 18.4 0.1 0.6 0.2-13.3 6.8-6.1 4.8-2.5 4.9-3.1 3.7-5.5 3.1-5.8 4.4-3.2 3.8-8.9 5.3-4.2 0.4-4.9-0.5-2.6 2.6-0.1 3.5 1 3.3 0.7 4.8-6-0.7-2.7-0.8-3.6 0.5-3.8 1.7-2.7 0-3.3-2.5-1.1-3.3 1.2-10.3-0.7-5.4-7.1-7.3-1.3-3.6-1.5-3.1-2.9-1.7-5.1-1.7-6.1 0.3-11 2.1-5.6 2.5-4.4 3.3-3.4 3.4-4.8 3.7-4.1 2.6-1.8 3.6-4.5 2-5.3-1.3-6.3-1-3.8-1.4z m64.1-26.3l4.9-2 3.2-0.4 2.2-1.6-1.9-4.9-1.7-2.9-3-1.6-4-1.5-5.7 0.5-6.7 1.2-2.7 2.9 0.6 4.1 4.4 1.7 5.1 3.3 5.3 1.2z" id="TWCYQ" name="嘉義">

                        </path>

                        <path d="M504.7 743.9l-0.7-4.5-1.3-2.6-2.8-2.8 3.5-2.5 1.9-4.3-0.8-3.8-4.6-0.7-0.8 1.4-0.8 2.4-1.3 1.9-2.4-0.1-0.9-1.6 0.3-5-0.5-1.8-3-1.3-1.6 1.5-1.4 2.1-1.9 0.5-2.1-1.8-0.6-2.5 0.5-2.4 0.9-1.7 2.1-1.1 2.7-0.4 2.2-0.7 0.7-2.2-1-1.1-6.7-1.7 0-1.4 5.6 0-0.5-1.9-3.1-2.7-2-2.3 0.5-2.9 1.8-1 1.9-0.7 1-1.8-0.6-2.8-1-2.3 0.7-2.2 1-2.6 1.6-1.9-0.3-1.7 0.3-1.6 2.4-6.5 1.2-1.2 1.8-0.5-2.7-1.8 1.2-2.9 3.8 1.4 6.3 1 5.3 1.3 4.5-2 1.8-3.6 4.1-2.6 4.8-3.7 3.4-3.4 4.4-3.3 5.6-2.5 11-2.1 6.1-0.3 5.1 1.7 2.9 1.7 1.5 3.1 1.3 3.6 7.1 7.3 0.7 5.4-1.2 10.3 1.1 3.3 3.3 2.5 2.7 0 3.8-1.7 3.6-0.5 2.7 0.8 6 0.7-1.6 4.8-7.5 10.9-7.2 12.2-4.7 6-5.4 5.3-4.6 3.9-4.5 4.6-3.8 5.1-2.1 3.7-1.7 4-4.6 3.2-4.6 1.9-2.6 1.8-3 1.1-6.1-0.7-5.9 0.6-11.3-1.6-3.5-1.8-2.8-6.2-0.1-0.3-4.5 2.6z" id="TWTNN" name="臺南市">

                        </path>

                        <path d="M551.1 836.2l-1.9-0.8-1.1 0-1.4 0.5-1.5 0.1-9.4-7.4-8.8-12.4 9.2 11.1-1-5.2-1.6-2.9-1.2-2.3-3.8-4.4-6.5-6-2.5-3.1-1.2-3.4 1.6-3.3 0.8-3-1.1-4.1-1.9-4.1-3.6-5.5-3.3-7.4-0.7-3.3 0-2.1 1.1-2.6 0.3-1.7-0.4-0.9-1-0.7-0.9-0.9-0.4-1.7-2.1-3.5-0.5-1.4-1.6-9.9 4.5-2.6 0.1 0.3 2.8 6.2 3.5 1.8 11.3 1.6 5.9-0.6 6.1 0.7 3-1.1 2.6-1.8 4.6-1.9 4.6-3.2 1.7-4 2.1-3.7 3.8-5.1 4.5-4.6 4.6-3.9 5.4-5.3 4.7-6 7.2-12.2 7.5-10.9 1.6-4.8-0.7-4.8-1-3.3 0.1-3.5 2.6-2.6 4.9 0.5 4.2-0.4 8.9-5.3 3.2-3.8 5.8-4.4 5.5-3.1 3.1-3.7 2.5-4.9 6.1-4.8 13.3-6.8 3.2 0.7 4.2 1.6 3 4.2 0.5 1.5 1.4 4.2-2.2 3.5-4 1.8-1 2.3 0.7 2.9 4 2.6 4.6 3.7 2 5.5 0.2 1.8-11.2 2.8-4.7 2.9-2.9 2.8-5.6 3.7-0.6 4.1 1.6 4.3-1.9 3.5-5.3 2.9-0.7 5 1.6 7.1-2.2 9.5 0 8.1-3.1 4.2-6.2 5.3-1.7 7 1 5.9 2.2 3.3 4.4 4.6 0.9 3.5-2.8 0.4-3.8-0.7-3.1 0.2-6.1 4.8-4.3-4-5.4-6.4-5.2 1.3-4.8 4.3-9.4-4.8-6.8 3.2-4.6 5.1-5.7 2.1-12.9-0.8-1.3 3.5-0.9 5.2-1.9 5.7 0.4 5-0.1 6.9-4 15.3-0.2 5.1 2 5.4 0.3 5.9-5.8 14.8z" id="TWKHH" name="高雄市">

                        </path>

                        <path d="M639 886.4l0.6 37.2-1.1 5.3-1.8 4.3-2.4 1.8-2.9 2.7 0.1 6 1 6.6-0.2 4.2-3.3-4.9-4.9-3.7-5.7-2.5-5.7-1.4-0.2 4.7-1.7 1.7-2.4-0.6-2.7-2.2-0.1-1.7 0.9-5-4-6.7-0.3-1.8 0-1.4 0.3-2.4 0-7.7 0.4-2.3 1.8-2.5 0.4-2.2-14.4-37.2-1.1-2.1-4-4.9-3.2-7.1-1.4-2.1-5.9-4.6-2.3-1.3-0.8-0.3-0.8-0.6-0.7-2.6-0.5-1-3.1-2.1-7.3-3.4-3.2-2.3-3.5-3-1.6-1-0.2-0.1 5.8-14.8-0.3-5.9-2-5.4 0.2-5.1 4-15.3 0.1-6.9-0.4-5 1.9-5.7 0.9-5.2 1.3-3.5 12.9 0.8 5.7-2.1 4.6-5.1 6.8-3.2 9.4 4.8 4.8-4.3 5.2-1.3 5.4 6.4 4.3 4 6.1-4.8 3.1-0.2 3.8 0.7 2.5 4.7 0.5 3.5 3.9 1 4 2.6-2 9.9-0.1 3.8-1.5 3.5-7 3-3.5 2-5.5 1.2-3.9 3.2-1.7 4.7-2.6 4.8-2.2 5.4-0.6 10.6 0.9 4.7 1.4 4.4 0.8 5.1 0 3.8 1.9 3.7 3.3 4-1.8 2.7-3.8 2.3-1.5 2.8-0.4 3.3 2 2.8 2.4 1.2 2.3 3.2-0.1 4.1 0.4 4.4 2.3 4.3 3.3 3.5 7.4 3.4 3.2-0.3z" id="TWPIF" name="屏東">

                        </path>

                        <path d="M753.4 640.2l-3.3 19-1.6 3.5-5.1 6.8-1.9 3.5-1.5 4.4-1 8.3 0.1 7.3-0.8 6.9-3.5 7.2-1.5 1.6-3.4 2.5-1.5 1.6-0.8 1.6-1.2 4.2-3.5 6.1-2.1 9.4-1.5 4.2-7.4 10.7-0.9 2-10 8.4-2.4 2.8-0.4 1.9 0.5 4.5-0.1 2-0.9 2.3-1.6 2.6-3.4 4.3-3.4 3.2-11.6 7.8-7.8 8.5-1.9 1-1.5 2-3.8 9.7-1.8 3.6-5.8 7.3-2.4 4.3-1.3 8.8-3.5 12.1-6.9 12.1-1 4.1-1.2 11.6 0.2 10.5-3.2 0.3-7.4-3.4-3.3-3.5-2.3-4.3-0.4-4.4 0.1-4.1-2.3-3.2-2.4-1.2-2-2.8 0.4-3.3 1.5-2.8 3.8-2.3 1.8-2.7-3.3-4-1.9-3.7 0-3.8-0.8-5.1-1.4-4.4-0.9-4.7 0.6-10.6 2.2-5.4 2.6-4.8 1.7-4.7 3.9-3.2 5.5-1.2 3.5-2 7-3 1.5-3.5 0.1-3.8 2-9.9-4-2.6-3.9-1-0.5-3.5-2.5-4.7 2.8-0.4-0.9-3.5-4.4-4.6-2.2-3.3-1-5.9 1.7-7 6.2-5.3 3.1-4.2 0-8.1 2.2-9.5-1.6-7.1 0.7-5 5.3-2.9 1.9-3.5-1.6-4.3 0.6-4.1 5.6-3.7 2.9-2.8 4.7-2.9 11.2-2.8 0.8 5.3 3.7 5.9 5.6 2 4.4 2.1 3.6 3.4 4.5 0.7 4.1 1.1 6.6 11.5 8.5 7 5.9 0.8 4.7-2.7 0.6-4.4 0-4.9 2.2-4.3 3.5-9.6 2.6-5.5 1.8-6.1 1.9-4.8 2.5-3.7 2.6-5-0.4-4.9-1.3-5 2.8-3.9 7.8-3.8 2.5 0.8z" id="TWTTT" name="臺東">

                        </path>

                        <path d="M807.2 455.6l0.5 0.5 0.6 1.1 0.5 1.1 0.2 0.7-1 1.7-4.2 4.1-4.6 6.3-3.3 2.7-1 1.4 0.5 1.5-0.6 1.1-4.9 3.6-1.8 1.8-2 4.3-2 8.8-5.4 7.8-1.1 3.2 0.2 3.4 1.3 3.8 1.1 1.6 0.9 0.7 0.6 1 0.1 2.3-0.8 2.7-2.7 4.1-0.5 2.5-0.3 4.6-2.3 11.7-4.6 12.4-5.8 28.8-3.4 7.1-8 46.2-2.5-0.8-7.8 3.8-2.8 3.9 1.3 5 0.4 4.9-2.6 5-2.5 3.7-1.9 4.8-1.8 6.1-2.6 5.5-3.5 9.6-2.2 4.3 0 4.9-0.6 4.4-4.7 2.7-5.9-0.8-8.5-7-6.6-11.5-4.1-1.1-4.5-0.7-3.6-3.4-4.4-2.1-5.6-2-3.7-5.9-0.8-5.3-0.2-1.8-2-5.5-4.6-3.7-4-2.6-0.7-2.9 1-2.3 4-1.8 2.2-3.5-1.4-4.2 4.3-2.5 2.2-2.1-1.2-4.4 1.1-1.9 1.1-3 3.7-2.7 5.4-1.2 5.3-0.2 3.8-3.4 1-6.2 2.8-3.7 5.5-2 3.3-2.3 1.1-3.6 2.3-9.1 0.9-6-0.7-5.2-0.8-3.9-2.3-2.9-1.5-2.9 4.1-6.8 0.1-2.7 1.8-5.1 2.8-6.1 2.2-6.3 1.1-7.2 0.5-5.4-1.3-3.2-1.5-2.4 1.7-5.5 3.7-7.7 5.8-7.6 0.1-2.7-1-3.3-3.8-2.4-2-2.2-0.2-7.2 2.7-2.1 4.7-1.6 3.8-1.7-0.2-2.6-1-4.5 2-1.5 0.9-1.4 2.5-1.3 2.2-2.7 0.9-3.7 2.2-3.6 5.4-3.4 1.7-4.5 0.3-3 3.4-3.5 1.8 1.5 4.7 2.2 10.8 2.8 6 2.3 4.7 0 3.5-3.3 1.7-4.3 2.7-0.6 13.4 7.9 8 1.3 0.8 0z" id="TWHUA" name="花蓮">

                        </path>

                        <path fill="fffff"d="M846.8 317.7l-8.6 4.3-4 3.4-13.5 16.4-2.1 3.5-1.7 4.8-1.1 5.6-0.4 5.5 0.2 5.3 2.4 11.2-0.2 2.9-1 2.8 0.2 5.8 2.4 4.5 4.7 2.9 5.5 1.1 0 1.2-2.3-0.2-2.2 0.2-1.9 0.6-1.3 1 1.9 3.6 0.9 4.7-0.6 4.1-4.3 2.4-0.3 1.8 0.6 2.1 1.2 2 0.4 2-1.8 1.7-4.5 2.6-5 5.8-0.2 2.3 0.3 5-0.8 2-1 1.6-0.6 2.3-0.3 4.6-0.4 1.2-0.7 0.9-0.4 1 0.7 1.2 0.2 0.2-0.8 0-8-1.3-13.4-7.9-2.7 0.6-1.7 4.3-3.5 3.3-4.7 0-6-2.3-10.8-2.8-4.7-2.2-1.8-1.5-4.2-3.4-3.6 0-3.4 1.7-2.8 0.4-2.7-1.8-3.2-1.9-3.5-0.8-1.1-2.6 0.5-4-2.6-0.8 3.1-7.5 10.1-10.2 2.7-4.2-0.4-3.2 1-3.4 1.7-4.7 0.3-1.1 2.9-1.1 2.3 0.5 2.5-1 1.6-2.7-2.3-9 3.9-2.8 2.2-0.6 4.2-1.2 3.5-1.3 2.7-2.4 3.6-2.5 4.8-2.3 2.8-2-0.3-1.4-0.7-2.3-0.1-3 1.4-3.6 3.4-2.9 2.7-1.6 9.4-3.8 9.7-5.9 4.5-1.3 3.6-2.6 2.3-3.7 2.3-2.9 2.7-1.4 2.5-0.9 3.3-2.1 1.2-2.8-1.8-2.5 1-2.2 8.1-1.6 2.6-1.8 6-3.2 4.3-0.9 2.4 1.4 0.6 0.8z" id="TWILA" name="宜蘭">

                        </path>

                        <path data-tooltip-id="tooltip" d="M806.8 285.1l24.9 6.1 2.4 1.5-1.2 2.6-0.3 2.1 0.5 3.8 1.7 6.2 1.9 3 1.6 0.7 5-0.8 2.6 0.3 3 0.8 2.7 1.3 1.5 1.9-6.3 3.1-0.6-0.8-2.4-1.4-4.3 0.9-6 3.2-2.6 1.8-8.1 1.6-1 2.2 1.8 2.5-1.2 2.8-3.3 2.1-2.5 0.9-2.7 1.4-2.3 2.9-2.3 3.7-3.6 2.6-4.5 1.3-9.7 5.9-9.4 3.8-2.7 1.6-3.4 2.9-1.4 3.6 0.1 3 0.7 2.3 0.3 1.4-2.8 2-4.8 2.3-3.6 2.5-2.7 2.4-3.5 1.3-4.2 1.2-1.8-4-6.4-6-1-4.1-0.6-3.7 2.3-2.7 1-3.8-6-8.9-3.7-1.4-5.3 0.3-3.7-2.1 1-4.8-0.8-3.7-3.8-3.7-0.8-3.7 0.8-4.1-0.2-4.5 2.7-2.9 9.4-2.8 2.4-2.5 0.7-3-0.3-2.9-3.7-5.4-3.1-1.6-2.9-0.7-2.3-2.1-3.4-2.2-4.6-2.2-3-3.3 8.1-1.5 3.4-1.3 4.5-3.7 1.3-0.7 1.6-0.3 2.2 0 2.6 0.8 1.3 1.9 0.9 2 1.1 1.1 2.5-1-2.6-4.1-4.2-4.2-2.2-1.4 0.7-1.9 1.3-1.1 1.3-0.7 0.6-0.6 1.5-3.8 2.3-4.2 4.7-4.3 7-3.5 7.9-1.8 7.8 0.9 3.2 2.5 7.3 10.1 2.5 5.4 0.9-0.3 1.9-0.6 2.3-0.2 1.5 0.4-0.1 0.7-0.7 0.9-0.7 1.3 0 1.5 0.8 0.9 1.6 1.2-3.1 2.1-5.2 2.3-2.3 1.5 0.4 2.1 2.1 2.7 1.2 2.5 2.1 2.5 2.6 2.5 2.2 1.6 7.6 3.1 3.7 0.5 2.9-1.1 1.8-1.3 0.3-1.8-2.7-2.8-0.1-2.2 0.2-8.6z m-30 36l3-1.2 5.5-7 1.4-3-2.7-2.3-3.3-1.9-0.1-3.6 1.1-4.8-1.1-3.2-2.8-2.5-1.8-7.2-1.2-2.6-1.1-2.4-0.3-2.4 0.4-2.6-1.5-1.6-2.8-0.9-2.9 1.4-2.1 1.8-7.8 4.7-2.6 2.9-1.5 3.3-1.3 1.7-1.2 2.1 2.7 3.1 4.2 4 0.8 4.5-1.1 5.3 2.9 4.9 4.1 3.2 2.8 3.2 2.6 2.3 3.5 0.8 4.2 0z" id="TWTPQ" name="新北市">

                        </path>

                        <path data-tooltip-id="tooltip" d="M793.1 279.5l1.1 0.7 0.5 0.8 1.2 1.1 2.8 1.1 8.1 1.9-0.2 8.6 0.1 2.2 2.7 2.8-0.3 1.8-1.8 1.3-2.9 1.1-3.7-0.5-7.6-3.1-2.2-1.6-2.6-2.5-2.1-2.5-1.2-2.5-2.1-2.7-0.4-2.1 2.3-1.5 5.2-2.3 3.1-2.1z" id="TWKEE" name="基隆市">
                             
                        </path>

                        <path data-tooltip-id="tooltip" d="M406.3 605.4l3.4 6.2 0.9 2.9-0.4 2.2-1.4-1.4-1.9-1.3-2-0.4-2.8 1.6-2.1 0.3-1 0.5-0.5 1.1-0.8 2.9-0.5 0.9-3.4 2-3.4 0.5-3.5-1.4-3.5-3.5 0.9-1.8 1.9 2.3 2.9 0.6 3.1-0.8 2.6-2.1-1.8-0.7-1.4-0.8-1.1-1.2-1-1.6-0.4 0.7 0 0.2-0.2 0.2-0.7 0.4-0.2-2.9 0.2-2.9 1.3 0 1.5 0.4 5.3-3.4 3.4-1.1-0.9 3.2-0.4 0.9 2.9-0.9 2.2 0.3 1.6-0.2 1.2-1.9z" id="TWPEN" name="澎湖">

                        </path>

                        <path data-tooltip-id="tooltip" d="M599.5 519.1l3 0.1 13 1.8 3-0.5 3.6-3.4 5.4-10.4 2.7-6.1 4.6-2.2 7.3 1.1 4.3-0.2 4.2-5.5 2.2-1.4 6.4 4.8 2.5-0.7 1.9-3.9 3.4-2.8 4.8 0.1 3.6-1.4 5.7-5.5 3.6-2.1 3.2-0.6 6.4-3.3 4.4-0.2 4.5-0.7 8-3.2 3.4-0.2 3.4 0.8 9.6 0.9 1 4.5 0.2 2.6-3.8 1.7-4.7 1.6-2.7 2.1 0.2 7.2 2 2.2 3.8 2.4 1 3.3-0.1 2.7-5.8 7.6-3.7 7.7-1.7 5.5 1.5 2.4 1.3 3.2-0.5 5.4-1.1 7.2-2.2 6.3-2.8 6.1-1.8 5.1-0.1 2.7-4.1 6.8 1.5 2.9 2.3 2.9 0.8 3.9 0.7 5.2-0.9 6-2.3 9.1-1.1 3.6-3.3 2.3-5.5 2-2.8 3.7-1 6.2-3.8 3.4-5.3 0.2-5.4 1.2-3.7 2.7-1.1 3-1.1 1.9 1.2 4.4-2.2 2.1-4.3 2.5-0.5-1.5-3-4.2-4.2-1.6-3.2-0.7-0.6-0.2-18.4-0.1-5.5-1-0.8-2.8-0.3-4.2-1.9-4.7-0.9-3.4 2.1-3.7 0.3-3.8-3.7-2.1-3-0.8-4.8-1.9-4.4-0.5-1.9-2.5-6 0.6-4.9 1.5-4.2-1.8-2.8-3.4 0.7-4.2 1.3-3.7-0.7-5.5 0.7-5.2 1.5-3.4-1.4-5.2 1.7-1.1 1.8-1.7 2.8-1.1 0.7-2.5-4.1-2.1-2.8-1-2.6-2.4-1.5-4.5 0.7-9.7 0.8-4.7 0.1-4.1 1.2-3.9 1.4-3.3-0.4-2.9 0.9-2.1 3.1-1.1 0-2.6z" id="TWNAN" name="南投">

                        </path>

                        <path data-tooltip-id="tooltip" data-tooltip-content="臺北市" d="M776.8 321.1l-4.2 0-3.5-0.8-2.6-2.3-2.8-3.2-4.1-3.2-2.9-4.9 1.1-5.3-0.8-4.5-4.2-4-2.7-3.1 1.2-2.1 1.3-1.7 1.5-3.3 2.6-2.9 7.8-4.7 2.1-1.8 2.9-1.4 2.8 0.9 1.5 1.6-0.4 2.6 0.3 2.4 1.1 2.4 1.2 2.6 1.8 7.2 2.8 2.5 1.1 3.2-1.1 4.8 0.1 3.6 3.3 1.9 2.7 2.3-1.4 3-5.5 7-3 1.2z" id="TWTPE" name="臺北市">

                        </path>

                        <path data-tooltip-id="tooltip" data-tooltip-content="嘉義市" d="M559.2 638.1l-5.3-1.2-5.1-3.3-4.4-1.7-0.6-4.1 2.7-2.9 6.7-1.2 5.7-0.5 4 1.5 3 1.6 1.7 2.9 1.9 4.9-2.2 1.6-3.2 0.4-4.9 2z" id="TWCYI" name="嘉義市">

                        </path>

                    </g>

                    <g id="points">

                        <circle class="22.123479637643072|118.46584311825282" cx="182.2" cy="909.8" id="0">

                        </circle>

                        <circle class="23.874448427495835|120.32875816495206" cx="535.3" cy="549.3" id="1">

                        </circle>

                        <circle class="26.06315941481179|121.81909020231146" cx="817.8" cy="91.7" id="2">

                        </circle>

                    </g>

                    <g id="label_points"  >

                        <circle class="Kinmen" cx="153.8" cy="422.9" id="TWKIN" >

                        </circle>

                        <circle class="Penghu" cx="396" cy="612.1" id="TWPEN">

                        </circle>

                        <circle class="Matsu Islands" cx="472.2" cy="56.8" id="TWLIE">

                        </circle>

                        <circle class="Taoyuan" cx="703.6" cy="320.4" id="TWTAO">

                        </circle>

                        <circle class="Hsinchu" cx="693.7" cy="378.3" id="TWHSQ">

                        </circle>

                        <circle class="Hsinchu City" cx="652.4" cy="360.1" id="TWHSZ">

                        </circle>

                        <circle class="Miaoli" cx="640.8" cy="418.8" id="TWMIA">

                        </circle>

                        <circle class="Taichung City" cx="604.9" cy="482.7" id="TWTXG">

                        </circle>

                        <circle class="Changhua" cx="565" cy="532.6" id="TWCHA">

                        </circle>

                        <circle class="Yunlin" cx="536" cy="583.2" id="TWYUN">

                        </circle>

                        <circle class="Chiayi" cx="598.2" cy="640.2" id="TWCYQ">

                        </circle>

                        <circle class="Tainan City" cx="536.2" cy="699.7" id="TWTNN">

                        </circle>

                        <circle class="Kaohsiung City" cx="605.1" cy="724.8" id="TWKHH">

                        </circle>

                        <circle class="Pingtung" cx="585.8" cy="821.8" id="TWPIF">

                        </circle>

                        <circle class="Taitung" cx="675.1" cy="732.1" id="TWTTT">

                        </circle>

                        <circle class="Hualien" cx="739" cy="565" id="TWHUA">

                        </circle>

                        <circle class="Yilan" cx="783.8" cy="406.8" id="TWILA">

                        </circle>

                        <circle class="New Taipei City" cx="763.3" cy="342.8" id="TWTPQ">

                        </circle>

                        <circle class="Keelung City" cx="796.7" cy="291.6" id="TWKEE">

                        </circle>

                        <circle class="Penghu" cx="396" cy="612.1" id="TWPEN">

                        </circle>

                        <circle class="Nantou" cx="658.6" cy="552" id="TWNAN">

                        </circle>

                        <circle class="Taipei City" cx="768.5" cy="297.9" id="TWTPE">

                        </circle>

                        <circle class="Chiayi City" cx="556.7" cy="630.5" id="TWCYI" >

                        </circle>

                    </g>

                </svg>}

            </svg>

  
            <Tooltip title="Add" placement="top-end">
            ${pop}
          </Tooltip>
         

        </div>

    );

}