import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return ( <
        div className = "App" >
        <
        PortfolioContainer / >
        <
        ToastContainer / >
        <
        /div>
    );
}

export default App;