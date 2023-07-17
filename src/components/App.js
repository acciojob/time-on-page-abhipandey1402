
import React, { useEffect, useState } from 'react'
import './../styles/App.css';


const App = () => {
  const [sec, setSec] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setSec(prev => prev+1);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);
  
  return (
    <div>
        {/* Do not remove the main div */}
    You've been on this page for {sec} seconds.
    </div>
  )
}

export default App
