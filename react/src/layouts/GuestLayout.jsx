import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            <p>This is Guest Layout page.</p>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
