export enum ListItem {
  Dashboard = "Dashboard",
  Order = "Order",
  Employee = "Employee",
  Menu = "Menu",
  Customer = "Customer",
  Transaction = "Transaction",
  Report = "Report",
  Settings = "Settings",
  Help_Center = "Help Center",
}

export interface Item {
  title: ListItem;
  url: string;
  icon: React.ReactNode;
}
