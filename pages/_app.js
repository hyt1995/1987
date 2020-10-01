import 'antd/dist/antd.css';
import React, { useState } from "react";
import AppLayout from "../components/Applayout";
import 'antd/dist/antd.css';



const HomePage = ({Component}) => {
    return (
        <div>
            <AppLayout><Component /></AppLayout>
        </div>    
    );
  };
  
  export default HomePage;