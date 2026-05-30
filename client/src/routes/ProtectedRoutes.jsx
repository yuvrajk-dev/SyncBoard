import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, checkingAuth }) => {
  const user = useSelector((store) => store.user);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-(--bg)">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin"></div>

          <p className="text-(--text-muted) font-semibold tracking-wide">
            Loading Workspace...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
