  import React from 'react'
  import {Routes,Route} from 'react-router-dom'
  import Navigation from './routes/navigation/navigation.component'
  import Home from './routes/home/home.component'
  import SignIn from './routes/Sign-in/sign-in.component'



 


  const Shop=()=>{
    return(

      <h1>this is shop</h1>
    )
  }

  
const App=()=>{

    return ( 
     <Routes>
      <Route path='/' element={<Navigation></Navigation>}>

      <Route index={true} element={<Home></Home>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      {/* nested inside act as child component */}

      </Route>
     </Routes>

    )
   
}

export default App;
{/*         
        // <Routes >
        //   <Route path='/' element={<Navigation/>}/>
        //   <Route index element={<Home/>}/>

        // <Route path='shop' element={<Shop/>}/>
       
        // </Routes> */}
