import React from 'react'
import { Box, styled } from "@mui/material";
import { useEffect } from 'react';
import { getNews } from '../service/api';
import { useState } from 'react';
import Article from './Article';

const Articles = () => {

  const [news, setNews] = useState([]);


    useEffect(() => {
           dailyNews();
    }, [])

    const dailyNews = async () => {
        let response = await getNews();
        setNews(response.data)
    }

  return (
    <Box>
      {
        news.map(data => (
           <Article data={data}/>
        ))
      }
    </Box>
  )
}

export default Articles