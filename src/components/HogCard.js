import {useState} from "react"


const Front = ({name, img})=> {
   return (
      <div>
         <h1>{name}</h1>
         <img src={img} alt={name}/>
      </div>
   )
}

const Back = ({greased, specialty, weight, medal, name}) => {
   
   return (
      <div>
         <h1>{name}</h1>
         <h3>{specialty}</h3>
         <p>{weight + " kilos"}</p>
         <p className="achievementText">{medal + " medal achieved"}</p>
         <h3>{greased ? "greased" : "not greased"}</h3>
      </div>
   )
}


function HogCard({name, img, key, greased, specialty, weight, medal}){

   const [showFront, setShowFront] = useState(true)
   const toggleEvent = ()=>{
      setShowFront(!showFront)
   }
   
   return(
      <div className="ui four wide column image pigTile" key={key} onClick={toggleEvent}>
         {showFront ?
         <Front name={name} img={img}/> :
         <Back greased={greased} specialty={specialty} weight={weight} medal={medal} name={name}/>
         }
      </div>
       
    )
}

export default HogCard