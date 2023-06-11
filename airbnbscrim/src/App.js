import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './style.css'

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })

  return (
    <div>
      <Navbar />
      {/* <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            /> */}
      {/* . */}
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  )
}
