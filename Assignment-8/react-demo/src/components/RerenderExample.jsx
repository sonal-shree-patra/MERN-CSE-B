import {useState, useRef} from 'react'

const RerenderExample = () => {
    const [foods, setFoods] = useState([])
    const food = useRef()
    function add(){
        setFoods([...foods, food.current.value].sort())
        food.current.value=""
      }
      console.log(foods);
      return (
        
        <div>
          <h1>React Application</h1>  
            <input type='text' name='food' ref={food} />
            <button onClick={add}>Add to List</button>
    
          <ul>
          {
            foods.length>0 && foods.map((food, index) => <li key={index}>{food}</li>)
          }
        </ul>
        
        </div>
      )
}

export default RerenderExample