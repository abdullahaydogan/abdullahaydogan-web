import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage/HomePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "projects/:slug",
        Component: ProjectDetailPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);