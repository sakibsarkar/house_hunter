import "./DashLayout.css";
import Sidebar from "../../DashBoardPages/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashLayout = () => {

    return (
        <div className="dashboard_container">
            <Sidebar />
            <div className="dashOutlets">
                <Outlet />
            </div>
        </div>
    );
};

export default DashLayout;

