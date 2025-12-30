import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../layouts/About";
import Technologies from "../layouts/Technologies";
import Projects from "../layouts/Projects";
import Contact from "../layouts/Contact";
import Experiences from "../layouts/Experiences";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: About,
            },
            {
                path: "/technologies",
                Component: Technologies,
            },
            {
                path: "/projects",
                Component: Projects,
            },
            {
                path: "/experience",
                Component: Experiences,
            },
            {
                path: "/contact",
                Component: Contact,
            },
        ]
    }
])