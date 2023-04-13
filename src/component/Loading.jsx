import { useEffect, useState } from "react";

import "./Loading.css"

function Loading() {
    let [hide, setHide] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setHide(hide=false);
          console.log(hide)
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div className={hide ? "Loading" : "noLoading"}>
            <div className="parent">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Loading

