"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UserRole, Inquiry } from "@/types";

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  toggleRole: () => void;
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, "id" | "createdAt" | "status">) => Promise<Inquiry>;
  updateInquiryStatus: (id: string, status: Inquiry["status"]) => void;
}

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-101",
    name: "Alexander Wright",
    email: "alexander@fintechnorth.com",
    company: "NorthPoint Capital",
    service: "Custom Software",
    budget: "$25,000 - $50,000",
    message: "Seeking an enterprise wealth-management dashboard with real-time portfolio analytics and compliance logging.",
    status: "in_review",
    createdAt: "2026-11-14T09:20:00Z",
  },
  {
    id: "inq-102",
    name: "Dr. Elena Rostova",
    email: "elena@medicareglobal.org",
    company: "Apex Healthcare",
    service: "Business Management Systems",
    budget: "$50,000+",
    message: "Need a HIPAA-compliant clinic management system with automated patient scheduling and telemedicine integration.",
    status: "new",
    createdAt: "2026-11-15T14:15:00Z",
  },
  {
    id: "inq-103",
    name: "Tariq Mahmood",
    email: "tariq@retailpulse.ae",
    company: "Retail Pulse UAE",
    service: "Web & Mobile Apps",
    budget: "$10,000 - $25,000",
    message: "Looking for an omnichannel POS system with multi-warehouse inventory syncing for 8 retail locations in Dubai.",
    status: "contacted",
    createdAt: "2026-11-12T11:45:00Z",
  },
];

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("client");
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);

  useEffect(() => {
    // Restore role & inquiries from localStorage if available
    try {
      const savedRole = localStorage.getItem("cvt_role") as UserRole;
      if (savedRole === "admin" || savedRole === "client") {
        setRoleState(savedRole);
      }
      const savedInquiries = localStorage.getItem("cvt_inquiries");
      if (savedInquiries) {
        setInquiries(JSON.parse(savedInquiries));
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    try {
      localStorage.setItem("cvt_role", newRole);
    } catch {}
  };

  const toggleRole = () => {
    setRole(role === "client" ? "admin" : "client");
  };

  const addInquiry = async (
    data: Omit<Inquiry, "id" | "createdAt" | "status">
  ): Promise<Inquiry> => {
    const newInquiry: Inquiry = {
      ...data,
      id: `inq-${Date.now().toString().slice(-4)}`,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    setInquiries((prev) => {
      const updated = [newInquiry, ...prev];
      try {
        localStorage.setItem("cvt_inquiries", JSON.stringify(updated));
      } catch {}
      return updated;
    });

    return newInquiry;
  };

  const updateInquiryStatus = (id: string, status: Inquiry["status"]) => {
    setInquiries((prev) => {
      const updated = prev.map((inq) => (inq.id === id ? { ...inq, status } : inq));
      try {
        localStorage.setItem("cvt_inquiries", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        toggleRole,
        inquiries,
        addInquiry,
        updateInquiryStatus,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
