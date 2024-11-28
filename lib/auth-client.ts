interface User {
  id: string;
  username: string;
  email: string;
  is_admin: boolean;
  is_collaborator: boolean;
  is_client: boolean;
}

interface AuthResponse {
  success: boolean;
  error?: string;
  user?: User;
}

export async function loginUser(username: string, password: string): Promise<AuthResponse> {
  // In a real application, this would call your authentication API
  // For demo purposes, we'll use a mock authentication
  if (username === 'demo' && password === 'demo123') {
    const user = {
      id: '1',
      username: 'demo',
      email: 'demo@example.com',
      is_admin: false,
      is_collaborator: false,
      is_client: true,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return { success: true, user };
  }
  
  return { success: false, error: 'Invalid credentials' };
}

export function logoutUser() {
  localStorage.removeItem('user');
}

export function getCurrentUser(): User | null {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}