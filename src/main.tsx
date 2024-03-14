import React from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import "./css/index.css";
import LoadingScreen from "./components/pages/LoadingScreen.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <React.StrictMode>
            <Suspense fallback={<LoadingScreen />}>
                <>
                    <App />
                </>
            </Suspense>
        </React.StrictMode>
    </Provider>,
);
