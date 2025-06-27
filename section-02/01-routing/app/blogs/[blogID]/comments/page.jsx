
// export default  async function({params}) {
//     const {blogID} = await params;
//   return (
//     <div>All comments of blog <b>{blogID}.</b></div>
//   )
// }

'use client';
import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';

export default function Comments({ params }) {
  const {blogID} = use(params);
  // const { blogID } = use(params); // 👈 correct way in latest Next.js
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blogs/${blogID}/comments/${query}`);
    }
  };

  return (
    <div>
      <h1>All comments of blog <b>{blogID}</b></h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search comments..." 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
