import React from 'react'


const data=[
    {
        "heading":"Local Credentials",
        "subheading":"Complexity",
        "subheading2":"Serverity",
        "content":[
            {
                "number":'10',
                "para":"Affected entities"
            },
            {
                "number": '45%',
                "para": "Critical assets at risk"
            }
        ],
        "btn":[
            {
                "logo":"🚀",
                "title":"View remediaations"
            }
        ]
    },
    {
        "heading":"PrintNightmare - Windows",
        "subheading":"Complexity",
        "subheading2":"Serverity",
        "content":[
            {
                "number":'39',
                "para":"Affected entities"
            },
            {
                "number": '31%',
                "para": "Critical assets at risk"
            }
        ],
        "btn":[
            {
                "logo":"🚀",
                "title":"View remediaations"
            }
        ]
    },
    {
        "heading":"Azure Add Role Assignment",
        "subheading":"Complexity",
        "subheading2":"Serverity",
        "content":[
            {
                "number":'9',
                "para":"Affected entities"
            },
            {
                "number": '29%',
                "para": "Critical assets at risk"
            }
        ],
        "btn":[
            {
                "logo":"🚀",
                "title":"View remediaations"
            }
        ]
    },
]


const LowerRightCard= () => {
  return (
    <>
        <div className='card' >
        <div className="lowerCard-header">
              <p>Top impacting attack techniques</p>
              <p>view all</p>
        </div>
        <div className="multipleCards" >
    {data.map((item,index) => {
        return(
        <div className='lowercards' key={index}>
            <h4>{item.heading}</h4>
            <p>{item.subheading}</p>
            <p>{item.subheading2}</p>

            <div className="middle-content-card">
            {item.content.map((item,index) => {
                return(
                <div className="left-content-card-data" key={index}>
                        <span>{item.number}</span>
                        <p>{item.para}</p>
                </div>
                )
            })}
            </div>
            {item.btn.map((item,index) => {
                return(
            <div className="remediations" key={index}>
                <p><span>{item.logo}</span> {item.title}</p>
            </div>

                )
            })}
        </div>
    )})}
        </div>
    </div>
    </>
  )
}

export default LowerRightCard