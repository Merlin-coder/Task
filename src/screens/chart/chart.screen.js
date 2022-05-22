import React from "react";
import Chart from "../../component/barchart/barchat.component";
import './chart.screen.scss';

const Barchart =()=>{
    return(
        <div className="Bar"> 
           <header className='bar_header'>
            <Chart />
            </header>
        </div>
    )
} 
export default Barchart;