'use client';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Remove the middleware since we're using client-side auth
export const config = {
  matcher: [],
};