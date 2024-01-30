import React from "react";
import Card from "./Card";

function All() {

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
      <h3>All Courses</h3>
        {
          cardContent.map(ele => <Card name={ele.name} description={ele.description} image={ele.image}></Card>)
        }
      </div>
    </div>
  );
}

export default All;
