import { RouteObject } from "react-router-dom";
import DashScreen from ".";

export const DashScreenRoutes: RouteObject[] = [
    {
        path: "/dashboard",
       element: <DashScreen />
    }
];