import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };

    try {
      // Call the custom API route to handle login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/Home');
      } else {
        const data = await response.json();
        console.log(data);
        console.error('Error during login:', data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-8 bg-gray-100 rounded-lg shadow ">
        <div className='grid grid-cols-3'>
        <div></div>
        <div>
        <img src='logo.png' className='md:h-36 ' />
        </div>
        </div>
        <h1 className="md:text-2xl text-sm text-center  font-mono font-bold uppercase mb-4">Garuda Intelligence Console</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-[#00A79D]  text-white p-2 rounded-md">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button onClick={() => router.push('/Register')} className="text-[#00A79D]">Register</button>
        </div>
      </div>
    </div>
  );
}
