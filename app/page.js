"use client";
import  "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import Header from "./components/header"
import Sec1 from "./components/Sec1"
import Loader from "./components/Loder"; // Adjust the path as 


export default function Page() {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      // Simulate page content loading
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Adjust as needed
      setContentLoaded(true);
    };

    loadContent();
  }, []);

  useEffect(() => {
    if (contentLoaded) {
      // Once content is loaded, set showContent to true
      setTimeout(() => {
        setShowContent(true);
        setLoading(false); // Hide loader once content is shown
      }, 2500); // Give some time for loader to complete (if needed)
    }
  }, [contentLoaded]);

  return (
    <>
      {loading ? <Loader onComplete={() => {}} /> : <div>
        <Header/>
        <Sec1/>
        
        </div>}
    </>
  );
}


// export default function Home() {
//   return (
//     <>
//     <AnimatedCircularProgressBarDemo/>
//     <Header/>
//     <Sec1/>
//     </>
//   );
// }
