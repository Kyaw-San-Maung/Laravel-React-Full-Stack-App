import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <p>This is Default Page.</p>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
