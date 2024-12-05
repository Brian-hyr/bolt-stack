'use client';

interface User {
  id: number;
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
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok && data.user) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      return { success: true, user: data.user };
    }

    return { success: false, error: data.error || 'Invalid credentials' };
  } catch (error) {
    return { success: false, error: 'An error occurred during login' };
  }
}

export function logoutUser() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
}

export function getCurrentUser(): User | null {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
}