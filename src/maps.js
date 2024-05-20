import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import {Button} from 'primereact/button';
import './test.css';
import './homepage.css';

import Article from './components/article.js';

export default function Maps() {
  let params = useParams()
  return (
    <div className="bg-zinc-100">
        <div className="bg-cover bg-center h-64" style={{backgroundImage: "url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')"}}>
            <div className="flex justify-between items-center h-full px-8">
                <div className="text-white">
                    <h1 className="text-4xl font-bold">{params.city_id}</h1>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto p-8 ">
            <div className="bg-white p-3 rounded-lg shadow-lg mb-6 h-[32rem]">
                <Article title ="hello" text ="測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1測試文字1"/> 
                <Article title ="hello2" text="222222"/> 
                <Article title ="hello3"text="3333333"/> 
                <Article title ="hello4"text="4444444"/> 
            </div>
        </div>
    </div>
);
  
}




