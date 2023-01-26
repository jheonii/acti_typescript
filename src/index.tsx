import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import DiagnosisHome from './pages/Diagnosis_home/Diagnosis_home';
import DiagnosisMain from './pages/Diagnosis_main/Diagnosis_main';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>페이지 준비중</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'diagnosis', element: <DiagnosisHome /> },
      { path: 'diagnosis-main', element: <DiagnosisMain /> }
    ]

  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
