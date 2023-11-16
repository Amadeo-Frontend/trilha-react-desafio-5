import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://maddmuioaanhehrljuat.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZGRtdWlvYWFuaGVocmxqdWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMDIxNTAsImV4cCI6MjAxNTY3ODE1MH0.W5DVmCeRaGJftF9HLnPI5AcIhJUIsaL3YP8R5QsJTpo',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZGRtdWlvYWFuaGVocmxqdWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMDIxNTAsImV4cCI6MjAxNTY3ODE1MH0.W5DVmCeRaGJftF9HLnPI5AcIhJUIsaL3YP8R5QsJTpo',
  },
});
