import ReactDom from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import "./index.css";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
    <ModalProvider>
        <App />
    </ModalProvider>
);
