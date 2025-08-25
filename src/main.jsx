import React from "react";
import ReactDOM from "react-dom/client"

const App=()=>{
  return(
    <div className="bg-black text-white h-screen">
      <h1>Hi saurabh you will get a new job by end of september 2025.</h1>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)