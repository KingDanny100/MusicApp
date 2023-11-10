import React, { useContext } from 'react'
import './Home.css'
import { data , Adverts, MyContext} from '../../Data'


const Home = () => {
    const data = useContext(MyContext)
  return (
    <div>Home</div>
  )
}

export default Home