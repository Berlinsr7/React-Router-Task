import React from "react";
import Card from "./Card";

function Career() {
  const cardContent = [
    {
      name: 'UX/UI Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp',
    },
    {
      name: 'Integrated AR',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp',
    },
    {
      name: 'Block Chain',  
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/blockchain.png',
    },
    {
      name: 'Human Computer Interaction',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp',
    },
    {
      name: 'Human Computer Interaction',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp',
    },
    {
      name: 'C Programming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/webps/c-programming.webp',
    },
    {
      name: 'UX/UI Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp',
    },
    {
      name: 'Data Analytics using Pandas',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/python.png',
    },
    {
      name: 'Integrated AR',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp',
    },
    {
      name: 'Human Computer Interaction',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp',
    },
    {
      name: 'UX/UI Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp',
    },
    {
      name: 'Integrated AR',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp',
    }
  ]
  return (
    <div className="container">
      <div className="row">
      <h3>Career</h3>
      {cardContent.map(ele => <Card name={ele.name} description={ele.description} image={ele.image}></Card>)}
      </div>
    </div>
  );
}

export default Career;
