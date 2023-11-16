import React, { useContext } from 'react'
import './Home.css'
import { data , Adverts, MyContext} from '../../Data'


const Home = (props) => {
    const data = useContext(MyContext)

    

  return (
    <div className='boxcontainer'>
      {data.map((item, index)=>{
        return <div className='box' key={index}>
          <img className='boximage' src={item.image} alt={item.name} />
          <h4 className='songtittle'>{item.title}</h4>
          <h5 className='album'>{item.Album}</h5>
        </div>
      })}
    </div>
  )
}

export default Home