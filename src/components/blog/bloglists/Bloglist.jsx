import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard/Blogcard";
import styles from "./BlogList.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const response = await fetch("http://localhost:8000/api/v1/blogs");
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
  
        const result = await response.json();
  
        // Validate the structure of the backend response
        if (result.success && Array.isArray(result.data)) {
          setBlogs(result.data); // Use the `data` key from the response
        } else {
          throw new Error("Unexpected response format from backend");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlogs();
  }, []);
  
  

  const totalPages = Math.ceil(blogs.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.blogGrid}>
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            author={blog.author}
            content={blog.content}
            blogimageUrl={blog.blogimageUrl}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          <FaArrowLeft /> Prev
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
