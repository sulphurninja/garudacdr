import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      name,
      email,
      password,
    };

    try {
      // Call the custom API route to handle registration
      const response = await fetch('/api/auth/register', {
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
        console.error('Error during registration:', data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
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
        <h2 className='font-mono text-center font-thin'>REGISTER</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-[#00A79D] text-white p-2 rounded-md">Register</button>
        </form>
      </div>
    </div>
  );
}
