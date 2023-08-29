import Tabs from "./Tabs";
import Items from "./Items";
// Import Data from the “./Data” and declare a react state and pass Data into the useState()
import Data from "./Data";
import { useState } from "react";

function Gallery(){
    // pass Data into the useState()
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });

// pass the categoryData into the new set() method with the spread operator (…)to convert it into an object
// set and also, also add “all”. then assign it to the tabsData.
    const tabsData= ["all", ...new Set(categoryData)];

// Declare an event handler as an arrow function filterCategory with const keyword and
//  pass a parameter category

// if a category is equal to “all” then pass Data into the setDta and then return; only
    const filterCategory=(category) =>{
        if(category=="all"){
            setData(Data);
            return;
        }

        // Apply javascript filter function on Data  by assigning to the filterCategory and
        // return value if Tab category (coming after clicking Gallery Tab)  
        // is exactly matched with category of Data.

       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
    return(
     
        <div className="container">
      <div className="row">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-10">
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
            <div className="col-sm-1">
                
            </div>
        </div>
           
       </div>
    
    )
}

export default Gallery;