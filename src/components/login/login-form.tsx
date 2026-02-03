import React, { useState } from "react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  initialEmail?: string;
  initialPassword?: string;
  isLoading?: boolean;
}

export default function LoginForm({
  onLogin,
  initialEmail = "",
  initialPassword = "",
  isLoading = false,
}: LoginFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      />

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`bg-gray-300 ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
