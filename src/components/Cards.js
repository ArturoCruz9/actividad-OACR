import React from 'react';
import Card from './Card';
import image1 from "../assets/PythonCurso.jpg"
import image2 from "../assets/JavascriptCourse.png"
import image3 from "../assets/cisco Curso.png"

const cards =[
  {
    id: 1,
    title: 'Python',
    image: image1,
    instructor:"Benito Samuel López Razo"
  },
  {
    id: 2,
    title: 'Java Script',
    image: image2,
    instructor:"Benito Samuel López Razo"
  },
  {
    id: 3,
    title: 'cisco',
    image: image3,
    instructor:"Benito Samuel López Razo"
  }
]


export default function Cards() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c=>(
        <div className='col-md-4' key={cards.id}>
        <Card
        key ={c.id}
        id={c.id}
        title={c.title}
        image={c.image}
        instructor={c.instructor}
         />
        </div>
       ))
}
      </div>
      </div>
  )
}
