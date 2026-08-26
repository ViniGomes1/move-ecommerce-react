import Login from '../../Components/Login/Login';
import Dashboard from '../../Components/Dashboard/Dashboard';
import { useAuth } from '../../context/AuthContext';

function AccountPage() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <Login />;
}

export default AccountPage;
