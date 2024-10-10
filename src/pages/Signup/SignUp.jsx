import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { signUpUser } from '../../services/auth';
import '../Signup/signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordType, setPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(eyeOff);
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(eyeOff);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
    setPasswordIcon(passwordType === 'password' ? eye : eyeOff);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
    setConfirmPasswordIcon(confirmPasswordType === 'password' ? eye : eyeOff);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.password) newErrors.password = true;
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = true;
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0 && isChecked) {
      try {
        const result = await signUpUser(formData); // Call the API function
        console.log('Signup successful:', result);
        navigate('/VerifyAcc');
      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="judul">
        <img src="/opportuneer.png" alt="Logo" />
        <h1>Greetings! and Welcome to Oportuneer!</h1>
      </div>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputnama">
              <input
                type="text"
                name="name"
                placeholder="Enter your firstname and lastname"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'invalid' : ''}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'invalid' : ''}
            />
            <div className="container-password">
              <input
                type={passwordType}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className={errors.password ? 'invalid' : ''}
              />
              <span className="icon-container" onClick={togglePasswordVisibility}>
                <Icon className="icon" icon={passwordIcon} size={25} />
              </span>
            </div>
            <div className="container-confirmPassword">
              <input
                type={confirmPasswordType}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'invalid' : ''}
              />
              <span className="icon-container" onClick={toggleConfirmPasswordVisibility}>
                <Icon className="icon" icon={confirmPasswordIcon} size={25} />
              </span>
            </div>

            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                By clicking this button you agreed to the terms & conditions
              </label>
            </div>

            <div className="signupOrLogin">
              <button type="submit">Sign Up</button>
              <p>Already have an account? Sign In <Link to="/">Login</Link></p>
            </div>
            <div className="additional-info">
              <p>
                Need help? Contact our Online Customer Service <a href="#" style={{ textDecoration: 'underline' }}>here!</a>
              </p>
              <p>
                Or Call <span style={{ textDecoration: 'underline' }}>+62 21 50666200</span>
              </p>
            </div>
          </form>
        </div>
        <div className="container-gambar">
          <img src="/signupimage.png" alt="Sign Up" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
