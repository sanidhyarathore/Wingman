import Home from "./Home"
import Topbar from "./Topbar"

const Dashboard = () => {
    return (
        <div className="flex-col bg-white text-red-500">
            <Topbar />
            <Home />
        </div>
    )
}

export default Dashboard