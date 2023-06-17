import "./style/Error.scss"

import React, { useEffect } from "react"

function Error() {

  useEffect(()=>{
    setTimeout(()=>{
      window.history.back()
    }, [3000])
  }, [])

  return (
    <div className="Error">
      <img src="/assets/svg/notFound.svg" alt="Not found vector"/>

      <section className="info">
        <header>
          <h1>404</h1>
          <h2>Not Found</h2>
        </header>
        <h3>Going back soon</h3>
      </section>
    </div>
  )
}

export default Error