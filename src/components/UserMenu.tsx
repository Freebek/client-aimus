"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CircleUser } from "lucide-react";

import { useEffect, useState } from "react";

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    avatar?: string;
    name?: string;
    balance?: number;
  };
}

export default function UserMenu({ isOpen, onClose, user }: UserMenuProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const variantsDesktop = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const variantsMobile = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={isMobile ? variantsMobile : variantsDesktop}
          transition={{ duration: 0.25 }}
          className={`z-50 ${
            isMobile
              ? "fixed bottom-0 left-0 w-full bg-backgr rounded-t-2xl shadow-lg p-4"
              : "absolute top-14 right-0 w-[240px] bg-backgr rounded-xl shadow-lg p-4"
          }`}
        >
          {/* Инфа о пользователе */}
          <div className="flex items-center gap-3 ">
            <img
              src={user?.avatar || "/assets/profile-picture.png"}
              alt="avatar"
              className="w-12 h-12 rounded-full border border-gray-500"
            />
            <div className="flex flex-col">
              <span className="text-white font-medium">{user?.name}</span>
              <span className="text-gray-400 text-sm">
                Баланс: {user?.balance ?? 0} ₽
              </span>
            </div>
          </div>

          <hr className="border-gray-600 my-2" />

          {/* Settings */}
          <Link
            href="/steamProfile"
            onClick={onClose}
            className="
    flex items-center gap-3 
    px-3 py-2 rounded-lg
    text-gray-300 hover:text-white 
    hover:bg-white/10 
    transition-colors duration-200 ease-in-out
  "
          >
            <CircleUser className="w-5 h-5" />
            <span className="font-medium">Personal Account</span>
          </Link>

          {/* Logout */}
          {/* <button
            onClick={() => {
              localStorage.removeItem("steam_token");
              sessionStorage.removeItem("steam_reloaded"); // ✅ сбрасываем флаг
              window.location.reload(); // чтобы сразу вернуло в разлогиненное состояние
            }}
            className="text-red-400 hover:text-red-300"
          >
            🔴 Logout
          </button> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
