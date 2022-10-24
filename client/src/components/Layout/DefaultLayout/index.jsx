import Header from "../../Header";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main role="main" className="wrapper">
                <div className="content">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
