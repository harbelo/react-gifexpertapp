import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategory] = useState([]);   

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory = {setCategory}/>
            <hr />
            <ol>
                {
                   categories.map(category => (
                    <GifGrid 
                        key = {category}
                        category = {category}
                    />
                   ))     
                }
            </ol>
       
        </>
    )


   /* 
   const [categories, setCategory] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);   

   const handleAdd = () => {
        setCategory([...categories, 'Hunter X Hunter']);
        //setCategory(c => [...c, 'Hunter X Hunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Add Category</button>
            <ol>
                {
                   categories.map(category => {
                    return <li key = {category}>{category}</li>
                   })     
                }
            </ol>
       
        </>
    )*/
   
}

export default GifExpertApp;