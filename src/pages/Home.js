// src/pages/Home.js
import React from 'react';
import BlogPost from '../components/BlogPost';
import { posts } from '../data/posts';

const Home = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>AEO Blog</h1>
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;