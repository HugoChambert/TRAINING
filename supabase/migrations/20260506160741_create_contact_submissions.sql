/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `goal` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamptz, auto)

  2. Security
    - Enable RLS
    - Allow anonymous INSERT (public contact form — no auth required)
    - No SELECT policy for end-users (submissions are private to the trainer)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  goal text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND name != '' AND
    email IS NOT NULL AND email != ''
  );
