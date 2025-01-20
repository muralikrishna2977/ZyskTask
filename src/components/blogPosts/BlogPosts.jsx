import React, { useState, useEffect } from "react";
import "./BlogPosts.scss";
import BlogPostCard from "./BlogPostCard";

const blogPostsArray = [
  {
    feature: "Design",
    header: "UX review presentations",
    content:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    mainImgPath: `${import.meta.env.BASE_URL}assets/blogPostImage1.jpg`,
    profileImgPath: `${import.meta.env.BASE_URL}assets/blogPostProfileImg1.jpg`,
    profileName: "Olivia Rhye",
    profileDate: "20 Jan 2024",
  },
  {
    feature: "Product",
    header: "Migrating to Linear 101",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    mainImgPath: `${import.meta.env.BASE_URL}assets/blogPostImage2.jpg`,
    profileImgPath: `${import.meta.env.BASE_URL}assets/blogPostProfileImg2.jpg`,
    profileName: "Phoenix Baker",
    profileDate: "19 Jan 2024",
  },
  {
    feature: "Software Engineering",
    header: "Building your API stack",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    mainImgPath: `${import.meta.env.BASE_URL}assets/blogPostImage3.jpg`,
    profileImgPath: `${import.meta.env.BASE_URL}assets/blogPostProfileImg3.jpg`,
    profileName: "Lana Steiner",
    profileDate: "18 Jan 2024",
  },
];

function BlogPosts() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="blog_posts_main">
      <div className="blog_posts_header">
        <div className="header_content">
          <h4>Our blog</h4>
          <h1>Lastest blog posts</h1>
          <p>
            Tool and strategies modern teams need to help their companies grow. 
          </p>
        </div>

        {!isMobile && <button>View all posts</button>}

      </div>

      <div className="blog_post_card_parent">
        {blogPostsArray.map((obj) => (
          <BlogPostCard
            feature={obj.feature}
            header={obj.header}
            content={obj.content}
            mainImgPath={obj.mainImgPath}
            profileImgPath={obj.profileImgPath}
            profileName={obj.profileName}
            profileDate={obj.profileDate}
          />
        ))}
      </div>
      {isMobile && <button className="mobile_button">View all posts</button>}
    </div>
  );
};

export default BlogPosts;
