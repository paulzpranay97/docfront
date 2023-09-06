import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, onHamburgerClick}) => {
   
    const [activeSubList, setActiveSubList] = useState(null);
    const [activeSubSubList, setActiveSubSubList] = useState(null);
    const [data, setData] = useState([]);
    const toggleSubList = (index) => {
      setActiveSubList(activeSubList === index ? null : index);
    };
  
    const toggleSubSubList = (index) => {
      setActiveSubSubList(activeSubSubList === index ? null : index);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/templates') 
          .then((response) => setData(response.data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       
       
        <nav className='menu_container'>

        

            <ul className='main_list'>

                <li ><a href='#Users Guide' > Overview</a></li>


                <li><a href='#1.0 Getting Started' onClick={() => toggleSubList(1)}>1.0 Getting Started</a>
                        <ul className={`main_sub_list ${activeSubList === 1 ? 'open' : ''}`}>
                            <li><a href='#1.1 Account Creation/Sign Up'>1.1 Account Creation/Sign Up</a></li>
                            <li><a href='#1.2 Sign In'>1.2 Sign In</a></li>
                            <li><a href='#1.3 Sign In with WeChat / LineID' onClick={() => toggleSubSubList(1.1)}>1.3 Sign In with WeChat / LineID</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 1.1 ? 'open' : ''}`}>
                                        <li><a href='#1.3.1 WeChat Login'>1.3.1 WeChat Login</a></li>
                                        <li><a href='#1.3.2 LineID Login'>1.3.2 LineID Login</a></li>
                                    </ul>
                            </li>
                            <li><a href='#1.4 Getting Assistance through Chat'>1.4 Getting Assistance through Chat</a></li>
                        </ul>
                </li>


                <li><a href="#2.0 Dashboard" onClick={() => toggleSubList(2)}>2.0 Dashboard</a>
                        <ul className={`main_sub_list ${activeSubList === 2 ? 'open' : ''}`}>
                            <li><a href='#2.1 Popular Cohorts'>2.1 Popular Cohorts</a></li>
                            <li><a href='#2.2 Recently Added Cohorts'>2.2 Recently Added Cohorts</a></li>
                            <li><a href='#2.3 Saved Cohorts Count'>2.3 Saved Cohorts Count</a></li>
                            <li><a href='#2.4 Lucina Refleggtion AI'>2.4 Lucina Refleggction AI</a></li>
                            <li><a href='#2.5 Browse All Profiles'>2.5 Browse All Profiles</a></li>
                        </ul>
                </li>



                <li><a href='#3.0 Gallery Page' onClick={() => toggleSubList(3)}>3.0 Gallery</a>
                        <ul className={`main_sub_list ${activeSubList === 3 ? 'open' : ''}`}>
                            <li><a href='#3.1 Find a Donors'>3.1 Find a Donors</a></li>
                            <li><a href='#3.2 Select your donor criteria'>3.2 Filter and Refine</a></li>
                            <li><a href='#3.3 Donor Profiles' onClick={() => toggleSubSubList(3.1)}>3.3 Donor Profiles</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 3.1 ? 'open' : ''}`}>
                                        <li><a href='#3.3.1 Request Full Profile Access'>3.3.1 Request Full Profile Access</a></li>
                                        <li><a href='#3.3.2 Add to Favorites'>3.3.2 Add to Favorites</a></li>
                                        <li><a href='#3.3.3 Add to Compare Section'>3.3.3 Compare Section</a></li>
                                        <li><a href='#3.3.4 Image View Section'>3.3.4 Image View Section</a></li>
                                    </ul>
                            </li>
                        </ul>
                
                </li>



                <li><a href='#4.0 Compare Section' onClick={() => toggleSubList(4)}>4.0 Compare Donors</a>
                        <ul className={`main_sub_list ${activeSubList === 4 ? 'open' : ''}`}>
                            <li><a href='#4.1 Adding Donors to the Comparison'>4.1 Adding Donors to the Comparison</a></li>
                            <li><a href='#4.2 Side-by-Side Comparison'>4.2 Side-by-Side Comparison</a></li>
                            <li><a href='#4.3 Remove from Compare'>4.3 Remove from Compare</a></li>
                            <li><a href='#4.4 Add to Favorite from Compare'>4.4 Add to Favorite from Compare</a></li>
                            <li><a href='#4.5 View from Compare'>4.5 View from Compare</a></li>
                        </ul>
                
                </li>
                <li><a href='#5.0 Contact Us' onClick={() => toggleSubList(5)}>5.0 Contact Us</a>
                        <ul className={`main_sub_list ${activeSubList === 5 ? 'open' : ''}`}>
                            <li><a href='#5.1 Sending Your Query'>5.1 Sending Your Query</a></li>
                            <li><a href='#5.2  Our Response'>5.2 Our Response</a></li>
                        </ul>
                </li>
                <li><a href='#6.0 Lucina ReflEggction AI'>6.0 Try Lucina Refleggction AI</a></li>
                <li><a href='#7.0 Chat With Us'>7.0 Chat with Us</a></li>

                <li><a href='#8.0 Profile' onClick={() => toggleSubList(6)}>8.0 Profile</a>
                        <ul className={`main_sub_list ${activeSubList === 6 ? 'open' : ''}`}>
                            <li><a href='#8.1 My Profile' onClick={() => toggleSubSubList(6.1)}>8.1 My Profile</a>
                                    <ul className={`main_sub_sub_list ${activeSubSubList === 6.1 ? 'open' : ''}`}>
                                        <li><a href='#8.1.1 General'>8.1.1 General</a></li>
                                        <li><a href='#8.1.2 Security'>8.1.2 Security</a></li>
                                    </ul>
                            </li>
                            <li><a href='#8.2 Favorites'>8.2 Favorites</a></li>
                            <li><a href='#8.3  Security'>8.3 Security</a></li>
                            <li><a href='#8.4 Log Out'>8.4 Log Out</a></li>
                        </ul>
                </li>
            </ul>
        </nav>
      
    </div>


  )
}

export default Sidebar

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sidebar.css';

// const Sidebar = ({ isSidebarOpen, onHamburgerClick }) => {
//   const [activeSubList, setActiveSubList] = useState(null);
//   const [activeSubSubList, setActiveSubSubList] = useState(null);
//   const [data, setData] = useState([]);

//   const toggleSubList = (index) => {
//     setActiveSubList(activeSubList === index ? null : index);
//   };

//   const toggleSubSubList = (index) => {
//     setActiveSubSubList(activeSubSubList === index ? null : index);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/templates')
//       .then((response) => setData(response.data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//       <nav className='menu_container'>
//         <ul className='main_list'>
//           {data.map((menuItem, index) => (
//             <li key={index}>
//               <a href={`#${menuItem.title}`}>{menuItem.title}</a>
//               <ul className={`main_sub_list ${activeSubList === index ? 'open' : ''}`}>
//                 {menuItem.chapters.map((chapter, subIndex) => (
//                   <li key={subIndex}>
//                     <a href={`#${chapter.title1}`} onClick={() => toggleSubList(subIndex+0.1)}>
//                       {chapter.title1}
//                     </a>
//                     <ul
//                       className={`main_sub_sub_list ${
//                         activeSubSubList === subIndex+0.1 ? 'open' : ''
//                       }`}
//                     >
//                       {chapter.sections.map((section, subSubIndex) => (
//                         <li key={subSubIndex}>
//                           <a href={`#${section.title2}`} onClick={() => toggleSubSubList(subSubIndex)}>
//                             {section.title2}
//                           </a>
//                           <ul
//                             className={`main_sub_sub_sub_list ${
//                               activeSubSubList === subSubIndex ? 'open' : ''
//                             }`}
//                           >
//                             {section.sub_section.map((subSection, subSubSubIndex) => (
//                               <li key={subSubSubIndex}>
//                                 <a href={`#${subSection.title3}`}>{subSection.title3}</a>
//                               </li>
//                             ))}
//                           </ul>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;


