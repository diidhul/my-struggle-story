import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";

type BlogContent = {
  id: string;
  title: string;
  date: string;
  content: string;
};

const Homepage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogContent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "http://localhost:4000/blogContent";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        // console.log(data);
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  const getMonthName = (date: string): string => {
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = parseInt(date.split("/")[1], 10) - 1;
    return monthNames[monthIndex] || "Unknown Month";
  };

  const groupByMonth = (blogs: BlogContent[]) => {
    return blogs.reduce((acc, blog) => {
      const month = getMonthName(blog.date);
      if (!acc[month]) acc[month] = [];
      acc[month].push(blog);
      return acc;
    }, {} as Record<string, BlogContent[]>);
  };

  const groupedBlogs = groupByMonth(blogs);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="min-h-screen px-6 lg:px-60 lg:py-10">
        {error}
        {Object.entries(groupedBlogs).map(([month, blogList]) => (
          <div
            key={month}
            className="grid grid-cols-5 lg:grid-cols-7 gap-4 mb-30"
          >
            <h2 className="text-2xl font-bold col-span-2 lg:col-span-7">
              {month}
            </h2>
            {blogList.map((blog) => (
              <div key={blog.id}>
                <button onClick={() => handleClick(blog.id)}>
                  <Card date={blog.date} />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
