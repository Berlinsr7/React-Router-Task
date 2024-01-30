import React from 'react'
import Card from "./Card";

function DataScience() {
  const cardContent = [
    {
      name: 'Machine Learning 101',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/ml.png',
    },
    {
      name: 'Data Analytics using Pandas',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/python.png',
    },
    {
      name: 'Big Data Engineering',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/bigdata.png',
    },
    {
      name: 'Keras for beginners',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/keras.png',
    },
    {
      name: 'Data Science',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/data_science_with_r.png',
    },
    {
      name: 'Machine Learning 101',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/ml.png',
    },
    {
      name: 'Data Analytics using Pandas',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/python.png',
    },
    {
      name: 'Big Data Engineering',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/bigdata.png',
    },
    {
      name: 'Keras for beginners',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/keras.png',
    },
    {
      name: 'Data Science',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quos placeat a esse blanditiis, sapiente repellendus saepe minus consequuntur illum!',
      image: 'https://static.guvi.in/course-thumbnail/data_science_with_r.png',
    }
  ]
  return (
    <div className="container">
        <div className="row">
        <h3>Data Science Courses</h3>
        {cardContent.map(ele => <Card name={ele.name} description={ele.description} image={ele.image}></Card>)} 
        </div>
    </div>
  )
}

export default DataScience