import {useState} from 'react';
import {BsFillGearFill} from 'react-icons/bs';
import MiddleCard from './MiddleCard';
import graph from "../assets/graph.png";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import graph3 from "../assets/graph3.png";
import LowerCard from './LowerCard';


const Home = () => {
    const [selectedLink, setSelectedLink] = useState('Link1');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const graphComponents= {
    Link1: {
      graph: <img src={graph} alt="Graph 1" className='graph-img' />,
      para: [
        'Azure to AWS_2',
        'Hybrid Risk To Customer Data',
        'Log4Shell (CVE-2021-44228) | Risk fro...',
      ],
    },
    Link2: {
      graph: <img src={graph1} alt="Graph 2" className='graph-img' />,
      para: [
        'New text for Link2',
        'Another text for Link2',
        'More details for Link2',
      ],
    },
    Link3: {
      graph: <img src={graph2} alt="Graph 3" className='graph-img' />,
      para: [
        'Text for Link3',
        'Details for Link3',
        'Additional details for Link3',
      ],
    },
    Link4: {
      graph: <img src={graph3} alt="Graph 4" className='graph-img' />,
      para: [
        'Text for Link4',
        'Details for Link4',
        'Additional details for Link4',
      ],
    },
  };




  return (
    <main className='main-container'>
        <div className="main-cards">
            <div className='mainCard1'>
                <p className='mainCard-heading'>Security Score</p>
                <div className="mainCardImg">
                <div className="hexagon">C</div>
                </div>
                <span>70</span>
                <p><span>-1</span><span> 📉</span> From last month</p>
            </div>
            <div className='mainCard2'>
                <div className="mainCard2-content">
                    <h4 className='mainCard2-heading'>Compare Scenarios</h4>
                    <div className="mainCard2-list">
                            {graphComponents[selectedLink].para.map((item, index) => (
                <li className='mainCard2-para' key={index}>{item}</li>
              ))}
                    </div>
                </div>
                <div className="select-scenario">
                <p className="home-list-item">
                <a href="#">
                    <BsFillGearFill  className="icon" />
                    
                </a>
                <p>Select Scenarios</p>
            </p>
                </div>
            </div>
            <div className='mainCard3'>
                <div className="mainCard3-header">
                <div className="graph-links">
  <p
    className={`graph-lists ${selectedLink === 'Link1' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Link1')}
  >
    1 Week
  </p>
  <p
    className={`graph-lists ${selectedLink === 'Link2' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Link2')}
  >
    1 Month
  </p>
  <p
    className={`graph-lists ${selectedLink === 'Link3' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Link3')}
  >
    3 Months
  </p>
  <p
    className={`graph-lists ${selectedLink === 'Link4' ? 'active' : ''}`}
    onClick={() => handleLinkClick('Link4')}
  >
    6 Months
  </p>
</div>

                <div className="graph-links-side">
                    <p>Delay</p>
                    <p>📉</p>
                </div>
                </div>
                <div className="graph-placeholder">
            {/* {selectedLink && (
            //   <GraphComponent1 link={selectedLink} />
            )} */}
            {/* <img src={graph} alt="graph-img"  className='graph-img'/> */}
            {/* <Line data={chartData} options={chartOptions} /> */}
            {graphComponents[selectedLink].graph}


          </div>
            </div>
        </div>
        <div className="options">
            <p>All Scenarioes</p>
            <p>Past 30 days</p>
        </div>
        <div className="middle-cards">
                <MiddleCard />
        </div>
        <div className="lower-cards">
            <div className="lower-card-inner">
                <LowerCard />
            </div>
        </div>
    </main>
  )
}

export default Home