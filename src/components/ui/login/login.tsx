"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={
        "block mb-2 font-medium text-gray-700 dark:text-gray-300 select-none " +
        (className ?? "")
      }
    >
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
  return (
    <input
      id={id}
      className={
        "w-full rounded-md border border-border px-4 " +
        "bg-muted text-muted-foreground" +
        "px-4 py-2 " +
        "focus:outline-none focus:ring-2 focus:ring-border" +
        "transition " +
        (className ?? "")
      }
      {...props}
    />
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const t = useTranslations("LoginForm");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-xl border border-background bg-background text-foreground"
      >
        <div className="text-center mb-8">
          <div className="w-42 h-26 bg-backgrond rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/images/talentbridge.png" alt="" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t("login")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {t("directions")}
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Label htmlFor="email" className="text-lg">
              {t("email")}
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="namn@exempel.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-lg">
              {t("password")}
            </Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:muted-foreground focus:ring-opacity-50 mr-2"
              />
              {t("rememberMe")}
            </label>
            <a
              href="#"
              className="text-ring hover:accent dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t("forgotPassword")}
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            {t("loginButton")}
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {t("noAccount")}{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            {t("signUp")}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
