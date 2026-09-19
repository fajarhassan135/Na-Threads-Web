import { createClient } from '@supabase/supabase-js'

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://grqfogwhamtcuhqshntx.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdycWZvZ3doYW10Y3VocXNobnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NTM5MjgsImV4cCI6MjA3MDIyOTkyOH0.wiUag6GaK_en5HI5r2N10ZnMg5Aik95R-84qA452TTE'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
