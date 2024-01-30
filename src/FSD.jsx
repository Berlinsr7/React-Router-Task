import React from "react";
import Card from "./Card";

function FSD() {
  const cardContent = [
    {
      name: 'C Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/c-programming.webp',
    },
    {
      name: 'Java Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/java.webp',
    },
    {
      name: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/javascript.webp',
    },
    {
      name: 'Python Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/python.webp',
    },
    {
      name: 'C Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/c-programming.webp',
    },
    {
      name: 'Java Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/java.webp',
    },
    {
      name: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/javascript.webp',
    },
    {
      name: 'Python Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/python.webp',
    }
  ]
  return (
    <div className="container">
      <div className="row">
      <h3>Full Stack Development Courses</h3>
      {cardContent.map(ele => <Card name={ele.name} description={ele.description} image={ele.image}></Card>)}
      </div>
    </div>
  );
}

export default FSD;
