import React from 'react';
import Directory from '../../components/directory/directory.component';



const  Home=()=> {

    const categories=[
      {
        id:1,
        title:"Hats",
        imageUrl:'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg'
      },
      {
        id:2,
        title:"Jackets",
        imageUrl:'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  
      },
      {
        id:3,
        title:"Sunglasses",
        imageUrl:'https://images.unsplash.com/photo-1582142366243-0b6a4aca0d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  
      },
      {
        id:4,
        title:"shoes",
        imageUrl:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        
      },
      {
        id:5,
        title:"Men",
        imageUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id:6,
        title:"Women",
        imageUrl:"https://cdn.pixabay.com/photo/2020/02/01/03/00/girl-4809434_960_720.jpg",
  
      },
    ];
    return  <Directory categories={categories}></Directory>
     
  
  }

  export default Home;