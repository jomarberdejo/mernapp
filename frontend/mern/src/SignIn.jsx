import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your server to handle sign-in
      const response = await fetch('http://localhost:4000/api/users/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      if (response.ok) {
        const data = await response.json();
        // Store the user's name in localStorage
        const userData = {
          userId: data.user._id,
          userName: data.user.username
        }
        localStorage.setItem('userInfo', JSON.stringify(userData));
        navigate('/home')
        
      } else {
        alert('Sign-in failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
