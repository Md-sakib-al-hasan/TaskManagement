import SidebarDashboard from "../components/SidebarDashboard";
import "./dashbord.css"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      
      <div className="w-full min-h-screen  lg:flex block bg-[#2A284D]">
      {/* sidebareDashboard */}
      <div className="lg:w-3/12 w-full min-h-screen  text-white p-4">
       <SidebarDashboard/>
      </div>
       {/* mainDashboard */}
      <div className="lg:w-9/12 w-full min-h-screen    text-white p-4">
         {children}
      </div>
</div>
    );
  }
  