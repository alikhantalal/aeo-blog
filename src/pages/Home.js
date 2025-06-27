import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import PostForm from '../components/PostForm';
import { posts as initialPosts } from '../data/posts';

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>AEO Blog</h1>
      <PostForm onAdd={addPost} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
