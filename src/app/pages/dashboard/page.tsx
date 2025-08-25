import DashboardPage from "@/components/dashboard/dashboard";
import NavBottom from "@/components/nav-bottom/nav-bottom";
import Navbar from "@/components/navbar/navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardPage />
      <NavBottom/>
    </div>
  );
}
