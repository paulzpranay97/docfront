import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebardb = ({ isSidebarOpen, onHamburgerClick}) => {
   
    const [activeSubList, setActiveSubList] = useState(null);
    const [activeSubSubList, setActiveSubSubList] = useState(null);
  
    const toggleSubList = (index) => {
      setActiveSubList(activeSubList === index ? null : index);
    };
  
    const toggleSubSubList = (index) => {
      setActiveSubSubList(activeSubSubList === index ? null : index);
    };

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://docback-j3tg.onrender.com/api-database/templates') 
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    
  return (
    
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <nav className='menu_container'>
      
    <ul className='main_list'>
  { data.map((template, index) => (
    <li key={index}>
      <a href={`#${template.title}`}>
        {template.title}
      </a>
      {template.chapters.map((chapter,index) => (
        <li key={index}>
          <a href={`#${chapter.title1}`}>{chapter.title1}</a>
        </li>
      ))}
    </li>
  ))}
</ul>

    </nav>
  </div>
  )
}

export default Sidebardb;



// <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       
       
    //     <nav className='menu_container'>

        

    //         <ul className='main_list'>

    //             <li ><a href='#Database Documentation' >Overview</a></li>
    //             <li><a href='#donors TABLE' >Donors TABLE</a></li>
    //             <li><a href="#donor_cohorts TABLE" >Donor_cohorts TABLE</a></li>
    //             <li><a href='#favorite_donors TABLE' >Favorite_donors TABLE</a></li>
    //             <li><a href='#from_submision TABLE' >From_submision TABLE</a></li>
    //             <li><a href='#users TABLE' >Users TABLE</a></li>
    //             <li><a href='#user_activity_log  TABLE'>User_activity_log  TABLE</a></li>
    //             <li><a href='#user_ip_relations  TABLE'>User_ip_relations  TABLE</a></li>
    //             <li><a href='#user_otp TABLE' >User_otp TABLE</a></li>
    //             <li><a href='#User_profile_request_relation TABLE' >User_profile_request_relation TABLE</a></li>
    //             <li><a href="#user_role_relations TABLE">User_role_relations TABLE</a></li>
    //             <li><a href="#User_role TABLE">User_role TABLE</a></li>
    //             <li><a href="#User_meta TABLE">User_meta TABLE</a></li>
    //             <li><a href="#User_settings TABLE">User_settings TABLE</a></li>
    //             <li><a href="#Deleted_users TABLE">Deleted_users TABLE</a></li>
    //             <li><a href="#Api_users TABLE">Api_users TABLE</a></li>
    //             <li><a href="#Options TABLE">Options TABLE</a></li>
    //             <li><a href="#Api_log TABLE">Api_log TABLE</a></li>
    //             <li><a href="#Cohort_stat TABLE">Cohort_stat TABLE</a></li>

    //         </ul>
    //     </nav>
      
    // </div>
