import Carousel from "../Carousel"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import './filtersection.css';
import { useState } from "react";

export default function FilterSection({title,data,filters,executeFilter}){

    const [selectedTab,setSelectedtab]=useState(0);

    return (
        <div className='section'>
            <div >
                <h1 className='title'>{title}</h1>
            </div>
            <Tabs value={selectedTab} onChange={(e,value)=>{
                executeFilter(filters[value].key)
                setSelectedtab(value);
            }} TabIndicatorProps={{style:{backgroundColor:'var(--css-primary)'}}}>
            {
            filters.map(ele=>
                <Tab className="tab" key={ele.key} label={ele.label}/>
                
            )}
            </Tabs>
            <Carousel data={data} navId='filter'/>
        </div>
    )
}