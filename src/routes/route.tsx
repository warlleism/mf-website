import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const Content = lazy(() => import('../content/index'))

export default function Rotas() {
  return (

    <Router>
      <Routes>
        <Route path="/"
          element={
            <Suspense fallback={<div style={{ background: "#161616", width: '100%', height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ClipLoader
                color={'#A07E43'}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>}>
              <Content />
            </Suspense>
          } />
      </Routes>
    </Router >

  )
}
