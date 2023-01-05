import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";

export const PreviewContext = createContext();

function App() {
    const [preview, setPreview] = useState("");
    console.log(preview);
    return (
        <div className="App">
            <PreviewContext.Provider value={{ setPreview }}>
                <NavBar />
            </PreviewContext.Provider>
            <iframe
                title="figma-preview"
                className="figma-preview"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                src={preview}
                allowfullscreen
                allowTransparency
            ></iframe>
        </div>
    );
}

export default App;
