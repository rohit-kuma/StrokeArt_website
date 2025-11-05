import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: You MUST replace 'your-repo-name' with the name of your GitHub repository.
  // For example, if your repository URL is https://github.com/your-username/art-institute-site,
  // you should change the base to: '/art-institute-site/'
  base: '/StrokeArt_website/',
})
