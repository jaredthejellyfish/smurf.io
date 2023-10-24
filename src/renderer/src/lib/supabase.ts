import { createClient } from '@supabase/supabase-js'
import { Database } from './database'

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
  'https://asjxzhmnnehabytvhtrj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzanh6aG1ubmVoYWJ5dHZodHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNTU2NTAsImV4cCI6MjAxMzczMTY1MH0.TXlxTmWGhH0BrGHhW7wXWd6rWhD7yb0J11IiiANr4fg'
)

export default supabase
