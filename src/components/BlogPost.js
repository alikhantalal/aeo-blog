// src/components/BlogPost.js
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPost = ({ post }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": post.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": post.answer
        }
      }
    ]
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '16px' }}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h2>
      <p style={{ fontWeight: '600' }}>{post.question}</p>
      <p style={{ marginBottom: '8px' }}>{post.answer}</p>
      <ul style={{ paddingLeft: '20px' }}>
        {post.bullets.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;
