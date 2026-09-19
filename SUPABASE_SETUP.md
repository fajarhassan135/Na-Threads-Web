# Supabase Setup for Contact Form

## Setup Instructions

1. **Create a Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note down your project URL and anon key

2. **Create Environment Variables:**
   Create a `.env` file in the root directory with:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Create Database Table:**
   In your Supabase SQL editor, run:
   ```sql
   CREATE TABLE contact_submissions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     phone TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Set Row Level Security (RLS):**
   ```sql
   ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
   
   -- Allow inserts from authenticated and anonymous users
   CREATE POLICY "Allow inserts for all users" ON contact_submissions
   FOR INSERT WITH CHECK (true);
   
   -- Allow reads only for authenticated users (optional)
   CREATE POLICY "Allow reads for authenticated users" ON contact_submissions
   FOR SELECT USING (auth.role() = 'authenticated');
   ```

## Features
- Stores contact form submissions in Supabase
- Includes timestamp for each submission
- Secure with Row Level Security
- Real-time data storage
