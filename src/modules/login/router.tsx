import { RouteObject } from "react-router-dom";
import LoginScreen from ".";

export const LoginRouter: RouteObject[] = [
    {
        path: "/login",
       element: <LoginScreen />
    }
];