import React from 'react'
import "./Post.css";

export default function Post({details}) {
  
  return (
    <div className="post">
        <h3>{details.title}</h3>
         <p>{details.body}</p>
         
    </div>
  )
}
