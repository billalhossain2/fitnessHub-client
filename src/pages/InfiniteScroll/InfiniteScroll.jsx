import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollUi = () => {
  const [comments, setComments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?page=${page}`);
      const newComments = await response.json();

      setComments(prevComments => [...prevComments, ...newComments]);

      setHasMore(newComments.length > 0);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={comments.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {comments.map((comment, index) => (
        <div className='border-2 border-gray-400 rounded-lg' key={comment.id}>
          <p>{index+1}</p>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <hr />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteScrollUi;