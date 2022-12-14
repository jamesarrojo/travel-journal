import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css"
import data from "./data"

export default function App() {
  const cardData = data.map(item => {
    return <Card 
              key={item.id} 
              {...item}
              // item={item} 
            />
  })

  console.log(cardData.length)
  return (
    <>
      <Navbar />
      <section className="card-list">
        {cardData}
      </section>
      
    </>
    
  )
}

