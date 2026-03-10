import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <Sidebar />

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        
        <Topbar />

        <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
