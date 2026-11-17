export type UserRole = "client" | "admin";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: "new" | "in_review" | "contacted" | "converted";
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
}

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}
