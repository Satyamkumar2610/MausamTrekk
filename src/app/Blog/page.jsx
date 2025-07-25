import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Blog = () => {
    return (
        <>
        <Head>
            <title>MausamTrek Blog</title>
            <meta name="description" content="Explore the MausamTrek blog for insights on weather, travel tips, and more." />
        </Head>
    
        <Navbar />
        </>
    );
    }
export default Blog;
