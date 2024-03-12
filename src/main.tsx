import React from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
//import App from './App.tsx'
import "./css/index.css";
import LoadingScreen from "./components/LoadingScreen.tsx";

const App = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Suspense fallback={<LoadingScreen />}>
            <App />
        </Suspense>
    </React.StrictMode>,
);
