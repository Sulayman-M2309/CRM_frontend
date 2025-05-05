import { HRSignupPage } from "../pages/HumanResources/HRSignup";
import { HRLogin } from "../pages/HumanResources/HRlogin";
import { HRDashbaord } from "../pages/HumanResources/HRdashbaord";
import { VerifyEmailPage } from "../pages/HumanResources/verifyemailpage.jsx";
// import { ResetEmailConfirm } from "../pages/Employees/resetemailconfirm.jsx"
// import { ResetEmailVerification } from "../pages/HumanResources/resendemailverificaiton.jsx"
import { HRForgotPasswordPage } from "../pages/HumanResources/forgotpassword.jsx";
import { ResetMailConfirmPage } from "../pages/HumanResources/resetmailconfirm.jsx";
import { ResetHRPasswordPage } from "../pages/HumanResources/resetpassword.jsx";
import { ResetHRVerifyEmailPage } from "../pages/HumanResources/resetemail.jsx";
import { HRDashboardPage } from "../pages/HumanResources/Dashboard Childs/dashboardpage.jsx";
import { HRProtectedRoutes } from "./HRprotectedroutes.jsx";
import { HREmployeesPage } from "../pages/HumanResources/Dashboard Childs/employeespage.jsx";
import { HRDepartmentPage } from "../pages/HumanResources/Dashboard Childs/departmentpage.jsx";
import Salary from "../pages/HumanResources/Dashboard Childs/Salary.jsx";
import IssueNotices from "../pages/HumanResources/Dashboard Childs/IssueNotices.jsx";
import Leaves from "../pages/HumanResources/Dashboard Childs/Leaves.jsx";
import Attendances from "../pages/HumanResources/Dashboard Childs/Attendances.jsx";
import Recruitment from "../pages/HumanResources/Dashboard Childs/Recruitment.jsx";
import InterviewInsights from "../pages/HumanResources/Dashboard Childs/InterviewInsights.jsx";
import Requests from "../pages/HumanResources/Dashboard Childs/Requests.jsx";
import HRProfiles from "../pages/HumanResources/Dashboard Childs/HRProfiles.jsx";
export const HRRoutes = [
  {
    path: "/auth/HR/signup",
    element: <HRSignupPage />,
  },
  {
    path: "/auth/HR/login",
    element: <HRLogin />,
  },
  {
    path: "/HR/dashboard",
    element: <HRDashbaord />,
    children: [
      {
        path: "/HR/dashboard/dashboard-data",
        element: <HRDashboardPage />,
      },
      {
        path: "/HR/dashboard/employees",
        element: <HREmployeesPage />,
      },
      {
        path: "/HR/dashboard/departments",
        element: <HRDepartmentPage />,
      },
      {
        path: "/HR/dashboard/Salaries",
        element: <Salary />,
      },
      {
        path: "/HR/dashboard/IssueNotices",
        element: <IssueNotices />,
      },
      {
        path: "/HR/dashboard/Leaves",
        element: <Leaves></Leaves>,
      },
      {
        path: "/HR/dashboard/Attendances",
        element: <Attendances />,
      },
      {
        path: "/HR/dashboard/Recruitment",
        element: <Recruitment />,
      },
      {
        path: "/HR/dashboard/InterviewInsights",
        element: <InterviewInsights></InterviewInsights>,
      },
      {
        path: "/HR/dashboard/Requests",
        element: <Requests></Requests>,
      },
      {
        path: "/HR/dashboard/HRProfiles",
        element: <HRProfiles></HRProfiles>,
      },
    ],
  },
  {
    path: "/auth/HR/verify-email",
    element: <VerifyEmailPage />,
  },
  {
    path: "/auth/HR/reset-email-validation",
    element: <ResetHRVerifyEmailPage />,
  },
  {
    path: "/auth/HR/forgot-password",
    element: <HRForgotPasswordPage />,
  },
  {
    path: "/auth/HR/reset-email-confirmation",
    element: <ResetMailConfirmPage />,
  },
  {
    path: "/auth/HR/resetpassword/:token",
    element: <ResetHRPasswordPage />,
  },
];
