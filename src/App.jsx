import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
const [isDarkMode,setDarkMode]=useState(
  ()=>{
    localStorage.setItem("theme","Dark")
    return localStorage.getItem("theme") === "Dark"; 
  }
)
useEffect(()=>{
  if(localStorage.getItem("theme")==="Dark"){
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "Light");
  }
  else{
     document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "Dark");

  }
},[isDarkMode])
  return (
    <>
      <div
        class="flex flex-col items-center justify-center min-h-screen
       bg-amber-50 dark:bg-gray-700 text-gray-700 dark:text-amber-50"
      >
        <h2 class="text-2xl font-bold  text-gray-700 dark:text-amber-50">
          Dark Mode
        </h2>
        <p class="mt-2 text-gray-600  text-gray-700 dark:text-amber-50">
          This is Demo to Dark Mode
        </p>
        <button
          className="mt-4 px-6 py-2 bg-gray-950 text-cyan-500 dark:text-amber-50 rounded hover:bg-blue-600"
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default App
