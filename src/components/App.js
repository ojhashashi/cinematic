import Header from "./Header";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    )
}

export default App;