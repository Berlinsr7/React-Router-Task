import React from "react";
import Card from "./Card";

function Cyber() {
  const cardContent = [
    {
      name: 'Block Chain',  
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/blockchain.png',
    },
    {
      name: 'Ethical Hacking for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Ethical Hacking Advanced',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Ethical Hacking Advanced',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Block Chain',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/blockchain.png',
    },
    {
      name: 'Ethical Hacking for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Ethical Hacking Advanced',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Ethical Hacking Advanced',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Block Chain',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/blockchain.png',
    },
    {
      name: 'Ethical Hacking for Beginners',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    },
    {
      name: 'Ethical Hacking Advanced',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/dark-web.png',
    }
  ]
  return (
    <div className="container">
      <div className="row">
      <h3>Cyber Security Courses</h3>
      {cardContent.map(ele => <Card name={ele.name} description={ele.description} image={ele.image}></Card>)}
      </div>
    </div>
  );
}

export default Cyber;
