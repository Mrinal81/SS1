import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import LowerRightCard from './LowerRightCard';
const LowerCard = () => {
  return (
    <>
    <div className="card">
        <div className="middleCard-header">
              <p>Top choke points</p>
              <p>view all</p>
        </div>
        <div className="inner-card">
           <div className="lower-content">
            <p>Top 3 Entities which are part of the most attack vectors to critical assets that affect 43.1% of critical assets (267/619)</p>
            <div className="status">
              <div className="names">Entity name</div>
              <div className="assets">Critical as...</div>
              <div className="trend">Trend</div>
            </div>
              <hr />
            <div className="status-data">
              <p className="names">hezi nagar</p>
              <p className="assets">
                <p>233</p> 
                <ProgressBar className='progressbar' completed={40} bgColor='#a31e32' isLabelVisible={false}/></p>
              <p className="trend"></p>
            </div>
              <hr />
            <div className="status-data">
              <p className="names">Compute Engine default service account</p>
              <p className="assets">
                <p>144</p>
                <ProgressBar className='progressbar' completed={20} bgColor='#a31e32' isLabelVisible={false}/></p>
              <p className="trend"></p>
            </div>
              <hr />
           <div className="status-data">
              <p className="names">gcppocsa</p>
              <p className="assets">
                <p>64</p>
                <ProgressBar className='progressbar' completed={10} bgColor='#a31e32' isLabelVisible={false}/></p>
              <p className="trend"></p>
            </div>
              <hr />
           </div>
           <div className="lower-card-img">
           <div className="circle">
                    <div className="circle-content">
                    <span>498</span>
                    <p>Cretical assets <br /> at risk</p>
                    </div>
                </div>
           </div>
        </div>
        </div>
        <LowerRightCard />
        </>
  )
}

export default LowerCard