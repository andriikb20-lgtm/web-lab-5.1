import { useEffect, useState } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/25/comments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-blue-600 uppercase tracking-widest">
        Відгуки роботодавців
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-gray-800">{comment.name}</span>
              <span className="text-sm text-gray-500">({comment.email})</span>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

