import Home from "./Home"
import Topbar from "./Topbar"

const Dashboard = () => {
    return (
        <div className="flex-col bg-white">
            <Topbar />
            <Home />
        </div>
    )
}

export default Dashboard