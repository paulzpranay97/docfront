import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Document.css';
function Document() {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from your backend API using Axios
      axios.get('https://docback-j3tg.onrender.com/api/templates') // Replace with your API endpoint
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);




   
    return (
      <div className="documentation">
        {data ? (
          <div className="documentation-content">
            {data.map((template, templateIndex) => (
              <div className="template" key={templateIndex}>
                <h2 id={template.title} >{template.title}</h2>
                
                <p className="overview">{template.overview}</p>
                <ol className="action-list">
                      {template.keyhighlight.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ol>
                {template.chapters.map((chapter, chapterIndex) => (
                  <div className="chapter" key={chapterIndex}>
                    <h3 id={chapter.title1} >{chapter.title1}</h3>
                    <h3 id='over'>Overview</h3>
                    <p>{chapter.overview1}</p>
                    <h3 id='action'>Action</h3>
                    <ol className="action-list">
                      {chapter.action1.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ol>




                    <div className="sections">
                      {chapter.sections.map((section, sectionIndex) => (
                        <div className="section" key={sectionIndex}>

                          <h4 id={section.title2}>{section.title2}</h4>

                          <h3 id='over'>Overview</h3>
                          <p>{section.overview2}</p>
                          <h3 id='action'>Action</h3>
                          <ol className="action-list">
                            {section.action2.map((action, actionIndex) => (
                              <li key={actionIndex}>{action}</li>
                            ))}
                          </ol>
                          
                          <div className="sub-sections">
                            {section.sub_section.map((subSection, subSectionIndex) => (
                              <div className="sub-section" key={subSectionIndex}>

                                <h5 id={subSection.title3}>{subSection.title3}</h5>
                                
                                <h3 id='over'>Overview</h3>
                                <p>{subSection.overview3}</p>
                                <h3 id='action'>Action</h3>
                                <ol className="action-list">
                                  {subSection.action3.map((action, actionIndex) => (
                                    <li key={actionIndex}>{action}</li>
                                  ))}
                                </ol>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
    
  }
  
  export default Document;