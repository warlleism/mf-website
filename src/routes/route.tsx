import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Content = lazy(() => import('../content/index'))



export default function Rotas() {
  return (

    <Router>
      <Routes>
        <Route path="/"
          element={
            <Suspense fallback='Carregando...'>
              <Content />
            </Suspense>
          } />
      </Routes>
    </Router >

  )
}
