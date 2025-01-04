import { useState, useEffect } from "react";
import Product from "./components/product";
import Spinner from "./components/spinner";
import { Comment } from "./components/comment";

export default function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=1`
      );
      const data = await response.json(); // Await the response.json() to get the data
      setComments(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="font-iransans container mx-auto px-20">
      <Product />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          comments.map((comment) => <Comment key={comment.id} comment={comment} />) // Pass the comment data to the Comment component
        )}
      </div>
    </main>
  );
}
