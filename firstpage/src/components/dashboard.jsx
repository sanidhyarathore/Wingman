import Home from "./Home"
import Topbar from "./Topbar"

const Dashboard = () => {
    return (
        <div className="flex-col bg-white text-red-200">
            <Topbar />
            <Home />
        </div>
    )
}

export default Dashboard