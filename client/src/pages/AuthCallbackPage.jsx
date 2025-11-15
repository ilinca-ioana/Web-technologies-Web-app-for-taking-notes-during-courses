import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
       localStorage.setItem('authToken', token);
     navigate('/dashboard');
    } else {
        navigate('/login');
    }
  }, [searchParams, navigate]); 
  return <div>The authentification is processing...</div>;
}

export default AuthCallbackPage;