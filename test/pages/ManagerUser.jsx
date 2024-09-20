import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ManagerUser() {
    const location = useLocation();
    console.log("Location: ", location.state);
    
  return (
    <div>ManagerUser</div>
  )
}
