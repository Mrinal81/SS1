import React from 'react';
import MiddleCardRight from './MiddleCardRight';

const data = [
  {
    "header": "Scenarios at high risk",
    "headerBtn": "View all",
    "paragraphdata": [
      {
        "title": "(22) - On-Prem Risk | Workstations DC",
      },
      {
        "title": "(24) - AWS - Public EC2 to wSensitive Data S3",
      },
      {
        "title": "(24) - Azure External Users > Azure Custome...",
      },
    ],
    "img": "😎",
    "btnText": [
      {
        "text": "Take action"
      },
      {
        "text": "Take action"
      },
      {
        "text": "Take action"
      }
    ],
  },
];

const MiddleCard = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="middleCard-header">
              <p>{item.header}</p>
              <p>{item.headerBtn}</p>
            </div>
            <div className="inner-card">
              <div className='list-title'>
                {item.paragraphdata.map((item, index) => {
                  return (
                    <p key={index}><span className='card-hexagon'>F</span> {item.title}</p>
                  );
                })}
              </div>
              <div className='list-title-img'>
                <p><span>{item.img}</span></p>
                <p><span>{item.img}</span></p>
                <p><span>{item.img}</span></p>
              </div>
              <div className='middleCard-btns'>
                {item.btnText.map((item, index) => {
                  return (
                    <div key={index} className="buttons">
                      <button type="submit" name="viewall" value="viewall" className='button'>Take action</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <MiddleCardRight />
    </>
  );
};

export default MiddleCard;
