import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="wrapper" style={{ minHeight: "100vh" }}>
            <div className="main">
                <main className="content">
                    <div className="container-fluid p-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
