// import React from 'react';

// import CategoryItem from '../category-item/category-item.component';
// import './directory.style.scss'

// const Directory=({categories})=>{

//     return(

//  <div className="categories-container">
// {categories.map((category)=>(
//  <CategoryItem category={category} key={category.id}></CategoryItem>
// ))}

// </div>

//     )
// }
// export default Directory;


// 

import CategoryItem from '../category-item/category-item.component';


const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;







