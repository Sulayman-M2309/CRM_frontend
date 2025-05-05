import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavLink } from "react-router-dom";

export function HRdashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>HR-Dashboard EMS</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-3 p-2">
              <NavLink
                to={"/HR/dashboard/dashboard-data"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/dashboard.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Dashboard</button>
                </SidebarMenuItem>
              </NavLink>

              <NavLink
                to={"/HR/dashboard/employees"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/employee-2.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Employees</button>
                </SidebarMenuItem>
              </NavLink>

              <NavLink
                to={"/HR/dashboard/departments"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/department.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Departments</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/Salaries"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/salary.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Salaries</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/IssueNotices"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-400 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/notice.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Issue Notices</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/Leaves"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-400 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/leave.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Leaves</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/Attendances"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-400 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/attendance.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Attendances</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/Recruitment"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/recruitment.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Recruitment</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/InterviewInsights"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/interview-insights.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Interview Insights</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/Requests"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/request.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">Requests</button>
                </SidebarMenuItem>
              </NavLink>
              <NavLink
                to={"/HR/dashboard/HRProfiles"}
                className={({ isActive }) => {
                  return isActive ? "bg-blue-200 rounded-lg" : "";
                }}
              >
                <SidebarMenuItem className="flex gap-4 hover:bg-blue-400 rounded-lg">
                  <img
                    src="/../../src/assets/HR-Dashboard/HR-profiles.png"
                    alt=""
                    className="w-7 ms-2 my-1"
                  />
                  <button className="text-[16px]">HR Profiles</button>
                </SidebarMenuItem>
              </NavLink>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
