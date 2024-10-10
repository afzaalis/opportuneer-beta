
const API_URL = 'https://b0f3-103-233-100-228.ngrok-free.app';  // URL dasar API

export const signUpUser = async (formData) => {
  const data = new FormData();
  data.append('username', formData.name);
  data.append('email', formData.email);
  data.append('password', formData.password);

  try {
    const response = await fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
    }
    
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
