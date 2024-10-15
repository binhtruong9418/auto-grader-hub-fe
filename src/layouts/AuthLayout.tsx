import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className={"w-full h-full"}>
            {/*This is the children of layout*/}
            <Outlet />
        </div>
    );
}

export default AuthLayout;