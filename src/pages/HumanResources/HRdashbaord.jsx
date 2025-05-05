import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
import { HRdashboardSidebar } from "../../components/ui/HRsidebar.jsx";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const HRDashbaord = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathArray = location.pathname.split("/");

  // Trigger navigation based on the path's last segment
  useEffect(() => {
    // Check if the last segment is not empty, then navigate
    const lastPathSegment = pathArray[pathArray.length - 1];
    if (
      lastPathSegment &&
      location.pathname !== `/HR/dashboard/${lastPathSegment}`
    ) {
      navigate(`/HR/dashboard/${lastPathSegment}`);
    }
  }, [location.pathname, navigate, pathArray]); // Depend on location.pathname to trigger when path changes

  console.log("this is the current path location", location);

  return (
    <div className="HR-dashboard-container flex">
      <div className="HRDashboard-sidebar">
        <SidebarProvider>
          <HRdashboardSidebar />
          <div className="sidebar-container min-[250px]:absolute md:relative">
            <SidebarTrigger />
          </div>
        </SidebarProvider>
      </div>
      <div className="HRdashboard-container h-screen w-full min-[250px]:mx-1 md:mx-2 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};
