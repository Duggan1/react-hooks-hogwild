import HogCard from "./HogCard"


function HogPen({hogs}){
    
    
    const hogObj = hogs.map(hog=>{
        return <HogCard key = {hog.id} name={hog.name} weight={hog.weight} img={hog.image} specialty={hog.specialty} greased={hog.greased} medal={hog["highest medal achieved"]}/>
    })


    
    return(
        <div className="ui grid container">
            {hogObj}
        </div>
    )
}

export default HogPen