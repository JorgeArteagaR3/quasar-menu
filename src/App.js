import "./App.css";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <iframe
                title="figma-preview"
                className="figma-preview"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaIWzrz7plNXBM1TSjPEQ9Q%2FQuasar%252FUsuarios%3Fpage-id%3D0%253A1%26node-id%3D2%253A12%26viewport%3D174%252C200%252C0.35%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A12"
                allowfullscreen
                allowTransparency
            ></iframe>
        </div>
    );
}

export default App;
