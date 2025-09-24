import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Experience from './Experience.tsx'
import Glass from './Glass.tsx'
import Flat from './Flat.tsx'
import Gradients from './Gradients.tsx'
import Cats from './Cats.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/glass" element={<Glass />} />
        <Route path="/experience/flat" element={<Flat />} />
        <Route path="/experience/gradients" element={<Gradients />} />
        <Route path="/experience/cats" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
