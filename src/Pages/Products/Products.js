import React from 'react'
import Sidebar from '../../Components/sideBar/sideBar'
import Apple from '../../images/apple.png'
import Dell from '../../images/dell.png'
import Hp from '../../images/hp.png'
import Intel from '../../images/intel.png'
import Lenovo from '../../images/lenovo.png'
import Scanner from '../../images/scanner.png'
import Tablet from '../../images/tablet.png'
import './Product.css'

const Products = () => {
  const Electronic =[
    { id: 1, Electname: 'Apple' , image: Apple, price:'#200,000'},
    { id: 2, Electname: 'Dell' , image: Dell , price:'#450,000'},
    { id: 3, Electname: 'Hp' , image: Hp , price:'#400,000'},
    { id: 4, Electname: 'Intel' , image: Intel , price:'#350,000'},
    { id: 5, Electname: 'Lenovo' , image: Lenovo , price:'#400,000'},
    { id: 6, Electname: 'Scanner' , image: Scanner, price:'#200,000'},
    { id: 3, Electname: 'Hp' , image: Hp , price:'#400,000'},
    { id: 4, Electname: 'Intel' , image: Intel , price:'#350,000'},
    { id: 2, Electname: 'Dell' , image: Dell , price:'#450,000'},
    { id: 7, Electname: 'Tablet' , image: Tablet , price:'#250,000'},
    { id: 2, Electname: 'Dell' , image: Dell , price:'#450,000'},
    { id: 7, Electname: 'Tablet' , image: Tablet , price:'#250,000'},
    ]
  return (
    <div className='main'>
      <Sidebar/>

      <div> <h1 className='H'>Naija Hub</h1>
       </div> 
       <div className='elect'>
       {
        Electronic && Electronic.map((Elect) => 
        
        <div className='elect-box'> 
      
          <div className='Elect-images'>
             <img src={Elect.image}  className='Elect-image' alt="" />
           </div>
            <p>{Elect.Electname}</p>
             <p>{Elect.price}</p>
    
        </div>
      ) }
    </div>

 </div>
  )
}

export default Products