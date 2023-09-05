import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Document from './Component/Document';
import Database from './Component/Database';
import Sidebardb from './Component/Sidebardb';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const [showDatabase, setShowDatabase] = useState(false);

  const handleLinkClick = (isDatabase) => {
    setShowDatabase(isDatabase);
  };

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 530) {
        
        setIsSidebarOpen(true); 
      } else {
        setIsSidebarOpen(false); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">

<Navbar onLinkClick={handleLinkClick} />
      {showDatabase ? (
        <>
          <Sidebardb />
          <Database />
        </>
      ) : (
        <>
          <Sidebar isOpen={isSidebarOpen}/>
          <Document />
          
        </>
      )}
    </div>
  );
}

export default App;


