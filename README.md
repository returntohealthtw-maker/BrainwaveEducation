<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1N06IBHXTezcMheyCIPu8TvWxxe6crmBq

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create `.env.local` (or copy from `.env.example`) and set:
   `VITE_GEMINI_API_KEY=...`
3. Run the app:
   `npm run dev`

## Deploy (Vercel)

Add an environment variable in **Vercel → Project → Settings → Environment Variables**:

- `VITE_GEMINI_API_KEY` = your Gemini API key

If this key is not set, the site will still render normally, but the AI chat feature will show a friendly “not configured” message instead of crashing the whole page.
