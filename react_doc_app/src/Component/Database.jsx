import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Document.css';
function Database() {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data from your backend API using Axios
      axios.get('https://docback-j3tg.onrender.com/api-database/templates') // Replace with your API endpoint
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
                      {template.keypoints.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ol>
                {template.chapters.map((chapter, chapterIndex) => (
                  <div className="chapter" key={chapterIndex}>
                    <h3 id={chapter.title1} >{chapter.id1}. {chapter.title1}</h3>
                    <h3 id='over'>Overview</h3>
                    <p>{chapter.des1}</p>
                    




                    <div className="sections">
                      {chapter.tables.map((section, sectionIndex) => (
                        <div className="section" key={sectionIndex}>

                          <h4 id={section.title2}>{section.id2}. {section.title2}</h4>

                          <h3 id='over'>{section.type2}</h3>
                          <p>{section.des2}</p>
                         
                        </div>
                      ))}
                    </div>
                    <h3 id='over'>Summary</h3>
                    <p>{chapter.summary}</p>

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
  
  export default Database;