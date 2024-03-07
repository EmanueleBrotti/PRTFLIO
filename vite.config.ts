import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.SERVICE_ID': JSON.stringify(env.SERVICE_ID),
      'process.env.TEMPLATE_ID': JSON.stringify(env.TEMPLATE_ID),
      'process.env.USER_ID': JSON.stringify(env.USER_ID)
    }
  }
  
})
