import { toast } from "sonner";
import { login } from "../../services/auth-service";
import LoginForm from "../../components/login/login-form";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await login(email, password);

      //sau khi login thanh cong thi luu token vao cookie

      // cookieStore.set("accessToken", result?.data?.accessToken);
      // cookieStore.set("refreshToken", result?.data?.refreshToken);
      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
}
