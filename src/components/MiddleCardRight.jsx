import React from 'react'

const MiddleCardRight = () => {
  return (
    <div className='card'>
        <div className="middleCard-header">
              <p>Critical assets at risk</p>
              <p>view all</p>
        </div>
        <div className="inner-card  right-card">
            <div className="left-content">
            <p className='left-content-para'>Cetical assets compromised by attack vectors with the lowest average complexity</p>
            <div className="left-side">
            <div className='names'>Critical assets name</div>
            <div>Avg.complexel...</div>
            <div>Trend</div>
            </div>
            <hr />
            <div className="left-side-data">
            <p className='names'>😎 Raymond Butcher</p>
            <p>2 <span className='span1'></span><span></span><span></span> Low</p>
            <p>🔜</p>
            </div>
            <hr />
            <div className="left-side-data">
            <p className='names'>😊 testing</p>
            <p>Avg.complexel...</p>
            <p>🔜</p>
            </div>
            <hr />
            <div className="left-side-data">
            <p className='names'>🤩 ATM-2 Jump Server</p>
            <p>Avg.complexel...</p>
            <p>🔜</p>
            </div>
            <hr />
            </div>
            <div className="right-side">
                <div className="circle">
                    <div className="circle-content">
                    <span>498</span>
                    <p>Cretical assets <br /> at risk</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MiddleCardRight