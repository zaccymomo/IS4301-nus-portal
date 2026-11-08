import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { showToast } from '../toast';

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) showToast('Please log in to view this page.', 'error');
  }, [user, loading]);

  // Wait for Firebase to restore the session so logged-in users aren't redirected on refresh
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;
