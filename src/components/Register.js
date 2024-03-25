import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });

      const navigate= useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://interview-plus.onrender.com/api/register', formData);
         alert("Registration Successful")
          console.log('Registration Successful');
          navigate("/")
        } catch (error) {
            alert(`Registration Failed ${error}`)
          console.error('Registration Failed');
        }
      };
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
      <div className="border border-black p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className="font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='border-solid border-4 rounded border-blue-300 mt-1 px-4 py-2 w-full'
              required
            />
          </div>
          <div className='mb-3'>
            <label className="font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='border-solid border-4 rounded border-blue-300 mt-1 px-4 py-2 w-full'
              required
            />
          </div>
          <div className='mb-3'>
            <label className="font-bold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='border-solid border-4 rounded border-blue-300 mt-1 px-4 py-2 w-full'
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Register</button>
          
        </form>
        <p>If already register <Link to={"/"}><span className='text-blue'>Click here</span></Link></p>
      </div>
    </div>
    </div>
  )
}

export default Register