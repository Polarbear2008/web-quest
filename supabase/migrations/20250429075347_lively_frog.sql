/*
  # Create tables for uploads and pledges

  1. New Tables
    - `uploads`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
      - `title` (text)
      - `description` (text)
      - `type` (text)
      - `file_url` (text)
      - `status` (text)

    - `pledges`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `email` (text)
      - `pledge_type` (text)
      - `reflection` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create uploads table
CREATE TABLE IF NOT EXISTS uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users,
  title text NOT NULL,
  description text,
  type text NOT NULL,
  file_url text NOT NULL,
  status text DEFAULT 'pending'
);

-- Create pledges table
CREATE TABLE IF NOT EXISTS pledges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users,
  name text NOT NULL,
  email text,
  pledge_type text NOT NULL,
  reflection text
);

-- Enable RLS
ALTER TABLE uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE pledges ENABLE ROW LEVEL SECURITY;

-- Create policies for uploads
CREATE POLICY "Users can view their own uploads"
  ON uploads
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own uploads"
  ON uploads
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for pledges
CREATE POLICY "Users can view their own pledges"
  ON pledges
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own pledges"
  ON pledges
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create admin policies
CREATE POLICY "Admins can view all uploads"
  ON uploads
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can view all pledges"
  ON pledges
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');