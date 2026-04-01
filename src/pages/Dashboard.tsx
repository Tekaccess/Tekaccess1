import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  Box,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const stats = [
    {
      label: "Total Revenue",
      value: "RWF 12.5M",
      change: "+12.5%",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      label: "Active Shipments",
      value: "48",
      change: "+3.2%",
      icon: Box,
      color: "bg-blue-500",
    },
    {
      label: "Delivered",
      value: "1,234",
      change: "+8.1%",
      icon: CheckCircle,
      color: "bg-violet-500",
    },
    {
      label: "In Transit",
      value: "24",
      change: "-2.4%",
      icon: Truck,
      color: "bg-amber-500",
    },
  ];

  const recentShipments = [
    { id: "#SH001", customer: "ABC Ltd", destination: "Kigali", status: "Delivered", date: "Mar 28, 2026" },
    { id: "#SH002", customer: "XYZ Corp", destination: "Musanze", status: "In Transit", date: "Mar 29, 2026" },
    { id: "#SH003", customer: "Tech Hub", destination: "Huye", status: "Pending", date: "Mar 30, 2026" },
    { id: "#SH004", customer: "Global Inc", destination: "Rubavu", status: "Delivered", date: "Mar 30, 2026" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#0A1437] transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
            <h1 className="text-xl font-black text-white">TekAccess</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white/70 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl transition-all"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-bold">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
            >
              <Package className="h-5 w-5" />
              <span className="font-bold">Shipments</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
            >
              <Truck className="h-5 w-5" />
              <span className="font-bold">Fleet</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
            >
              <Users className="h-5 w-5" />
              <span className="font-bold">Customers</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
            >
              <Settings className="h-5 w-5" />
              <span className="font-bold">Settings</span>
            </a>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white rounded-xl transition-all"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-bold">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#0A1437]"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search shipments, customers..."
                  className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-0 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A1437] transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 hover:text-[#0A1437] transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="h-10 w-10 rounded-full bg-[#0A1437] flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A1437]">Admin</p>
                  <p className="text-xs text-slate-500">admin@tekaccess.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0A1437] mb-2">
              Welcome back, Admin
            </h1>
            <p className="text-slate-600">
              Here's what's happening with your logistics today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`h-12 w-12 ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      stat.change.startsWith("+")
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-black text-[#0A1437] mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Shipments */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-[#0A1437]">Recent Shipments</h2>
                <p className="text-sm text-slate-500 mt-1">Latest shipments and their status</p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-[#0A1437] hover:text-[#0A1437]/70 transition-colors">
                View All
                <TrendingUp className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Destination
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentShipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-[#0A1437]">
                        {shipment.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {shipment.customer}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {shipment.destination}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getStatusColor(
                            shipment.status
                          )}`}
                        >
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {shipment.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
