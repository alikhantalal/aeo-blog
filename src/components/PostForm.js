import React, { useState } from 'react';

const PostForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    question: '',
    answer: '',
    bullets: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: formData.title,
      question: formData.question,
      answer: formData.answer,
      bullets: formData.bullets.split('\n').filter(b => b.trim() !== '')
    };
    onAdd(newPost);
    setFormData({ title: '', question: '', answer: '', bullets: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '24px', backgroundColor: '#fff', padding: '16px', borderRadius: '8px' }}>
      <h3 style={{ marginBottom: '12px' }}>Add AEO Blog Post</h3>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <input
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
        placeholder="Question"
        required
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        placeholder="Answer"
        required
        rows={3}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        name="bullets"
        value={formData.bullets}
        onChange={handleChange}
        placeholder="Bullet points (one per line)"
        rows={3}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', fontWeight: 'bold' }}>Add Post</button>
    </form>
  );
};

export default PostForm;
