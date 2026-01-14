"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface ApiUserData {
  steam_avatar?: string;
  steam_name?: string;
  steam_id_64?: string;
  steam_id_32?: string;
  steam_id_3?: string;
  profile_url?: string;
  country?: string;
  city?: string;
  last_login_at?: string;
  oferta_read?: boolean;
}

interface UserContextType {
  user: ApiUserData | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ApiUserData | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const token = localStorage.getItem("steam_token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.aimus.uz/v1/user/data", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data?.data) setUser(data.data);
    } catch (err) {
      console.error("❌ Ошибка загрузки Steam-пользователя", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("steam_token");
    setUser(null);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, refreshUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside <UserProvider>");
  return ctx;
};
