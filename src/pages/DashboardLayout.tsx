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
  Clock,
  AlertCircle,
  Download,
  Filter,
  Plus,
  MoreVertical,
  Calendar,
  MapPin,
  Phone,
  Mail,
  BarChart3,
  FileText,
  ClipboardList,
  Route,
  Fuel,
  Wrench,
} from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navSections = [
    {
      title: "OVERVIEW",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
      ],
    },
    {
      title: "OPERATIONS",
      items: [
        { id: "orders", label: "Orders", icon: Package },
        { id: "shipments", label: "Shipments", icon: Box },
        { id: "fleet", label: "Fleet", icon: Truck },
        { id: "routes", label: "Routes", icon: Route },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        { id: "customers", label: "Customers", icon: Users },
        { id: "warehouse", label: "Warehouse", icon: ClipboardList },
        { id: "fuel", label: "Fuel Tracking", icon: Fuel },
        { id: "maintenance", label: "Maintenance", icon: Wrench },
      ],
    },
    {
      title: "OTHERS",
      items: [
        { id: "team", label: "Team", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
      ],
    },
  ];

  const stats = [
    {
      label: "Total Revenue",
      value: "RWF 12.5M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      label: "Active Orders",
      value: "48",
      change: "+3.2%",
      trend: "up",
      icon: Box,
      color: "bg-blue-500",
    },
    {
      label: "Delivered",
      value: "1,234",
      change: "+8.1%",
      trend: "up",
      icon: CheckCircle,
      color: "bg-violet-500",
    },
    {
      label: "In Transit",
      value: "24",
      change: "-2.4%",
      trend: "down",
      icon: Truck,
      color: "bg-amber-500",
    },
    {
      label: "Pending",
      value: "12",
      change: "+1.2%",
      trend: "up",
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      label: "Issues",
      value: "3",
      change: "-50%",
      trend: "down",
      icon: AlertCircle,
      color: "bg-red-500",
    },
  ];

  const orders = [
    {
      id: "#ORD-001",
      customer: "ABC Ltd",
      destination: "Kigali",
      status: "Delivered",
      date: "Mar 28, 2026",
      items: 15,
      value: "RWF 450,000",
    },
    {
      id: "#ORD-002",
      customer: "XYZ Corp",
      destination: "Musanze",
      status: "In Transit",
      date: "Mar 29, 2026",
      items: 8,
      value: "RWF 320,000",
    },
    {
      id: "#ORD-003",
      customer: "Tech Hub",
      destination: "Huye",
      status: "Pending",
      date: "Mar 30, 2026",
      items: 22,
      value: "RWF 680,000",
    },
    {
      id: "#ORD-004",
      customer: "Global Inc",
      destination: "Rubavu",
      status: "Delivered",
      date: "Mar 30, 2026",
      items: 5,
      value: "RWF 180,000",
    },
    {
      id: "#ORD-005",
      customer: "StartUp RW",
      destination: "Kigali",
      status: "Processing",
      date: "Mar 31, 2026",
      items: 12,
      value: "RWF 420,000",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-violet-100 text-violet-700";
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
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#0A1437] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-[#0A1437]">TekAccess</h1>
                <p className="text-xs text-slate-500">Logistics</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
            {navSections.map((section) => (
              <div key={section.title}>
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        activeSection === item.id
                          ? "bg-[#0A1437] text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* User Profile */}
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-20 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-slate-600 hover:text-[#0A1437]"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold text-[#0A1437] capitalize">
                {activeSection}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A1437] transition-all"
                />
              </div>
              <button className="relative p-2 text-slate-600 hover:text-[#0A1437] transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-200">
                <div className="h-9 w-9 rounded-full bg-[#0A1437] flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeSection === "dashboard" && (
            <>
              {/* Stats Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`h-10 w-10 ${stat.color} rounded-xl flex items-center justify-center`}
                      >
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                      <span
                        className={`text-xs font-bold ${
                          stat.trend === "up"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-xl font-black text-[#0A1437] mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-bold text-[#0A1437]">
                      Recent Orders
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Latest orders and their status
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">
                      <Filter className="h-4 w-4" />
                      Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#0A1437] text-white rounded-xl text-sm font-bold hover:bg-[#0A1437]/90 transition-colors">
                      <Download className="h-4 w-4" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Order ID
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Customer
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Destination
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Items
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Value
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Date
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="hover:bg-slate-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-bold text-[#0A1437]">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-slate-700">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-slate-400" />
                              {order.destination}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            {order.items} items
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-[#0A1437]">
                            {order.value}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getStatusColor(
                                order.status,
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="p-2 text-slate-400 hover:text-[#0A1437] transition-colors">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeSection !== "dashboard" && (
            <div className="flex items-center justify-center h-96 bg-white rounded-2xl border border-slate-100">
              <div className="text-center">
                <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1437] mb-2">
                  {activeSection.charAt(0).toUpperCase() +
                    activeSection.slice(1)}
                </h3>
                <p className="text-slate-500 max-w-md">
                  This section is under development. Check back soon for
                  updates.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
