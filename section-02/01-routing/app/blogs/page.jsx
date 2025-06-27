'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// export const metadata = {
//   title: "Blogs",
// };

export default function Blogs() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blogs/${query}`); // or any route you want
    }
  };

  return (
    <div>
      <h1>Blogs</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search blog..." 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
