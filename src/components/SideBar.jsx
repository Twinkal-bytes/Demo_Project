import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/Constants'

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack 
    direction="row"
    sx={{
        overflowY :'auto',
        height :{sx :'auto', md:'95%'},
        flexDirection:{ md:'column'} 
    }}>
        {categories.map((category,i)=>
            <button className='category-btn' key={i}
            onClick={()=>setSelectedCategory(category.name)}
            style={{background : category.name === selectedCategory && "#FC1503" , color :'white'}}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        )}
    </Stack>
  )
}

export default SideBar