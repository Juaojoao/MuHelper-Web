import { RouteObject } from "react-router-dom";
import { FirstScreen } from "./index";

export const fristScreenRoutes: RouteObject[] = [
    {
        path: "/",
       element: <FirstScreen />
    }
];