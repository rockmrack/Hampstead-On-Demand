# 🚀 Quick Deploy Guide - 5 Minutes to Live

## What You Need Right Now

### 1. Supabase Production Project
If you don't have one:
- Go to https://supabase.com/dashboard
- Click "New Project"
- Name: `hampstead-production`
- Region: Europe (closest to London)
- Database Password: (save this!)
- Wait 2 minutes for setup

**Copy these values:**
```
Project URL: https://xxxxx.supabase.co
Anon Key: eyJhbGci...
```

### 2. Resend API Key
If you don't have one:
- Go to https://resend.com
- Sign up (free tier: 100 emails/day)
- API Keys → Create API Key
- Copy: `re_xxxxx`

### 3. Admin Email
```
Your email address for receiving bookings
```

---

## Deploy Now (3 Steps)

### Step 1: Go to Vercel (2 min)
1. Visit: https://vercel.com
2. Click "Sign Up" or "Login with GitHub"
3. Authorize Vercel to access your repositories

### Step 2: Import Project (1 min)
1. Click "Add New Project"
2. Find `rockmrack/Hampstead-On-Demand`
3. Click "Import"
4. Framework: Next.js ✓ (auto-detected)
5. **DON'T CLICK DEPLOY YET**

### Step 3: Add Environment Variables (2 min)
Click "Environment Variables" and add these **5 required variables**:

| Key | Value | Where to Get It |
|-----|-------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_APP_URL` | `https://hampstead-on-demand.vercel.app` | (Your Vercel URL - edit after first deploy) |
| `RESEND_API_KEY` | `re_xxxxx` | Resend Dashboard → API Keys |
| `ADMIN_EMAIL` | `your-email@gmail.com` | Your email |

**Now click "Deploy"** 🎉

---

## After First Deploy (5 min)

### 1. Get Your URL
- Vercel will show: `https://hampstead-on-demand.vercel.app`
- Click the URL to visit your live site!

### 2. Update Supabase (IMPORTANT)
1. Go to Supabase Dashboard
2. Authentication → URL Configuration
3. **Site URL:** `https://hampstead-on-demand.vercel.app`
4. **Redirect URLs:** Add:
   ```
   https://hampstead-on-demand.vercel.app/auth/callback
   https://hampstead-on-demand.vercel.app/**
   ```
5. Click "Save"

### 3. Update NEXT_PUBLIC_APP_URL
1. Go back to Vercel Dashboard
2. Project Settings → Environment Variables
3. Edit `NEXT_PUBLIC_APP_URL`
4. Change to: `https://hampstead-on-demand.vercel.app`
5. Redeploy: Deployments → ... → Redeploy

### 4. Test Everything
- [ ] Visit your site
- [ ] Try to sign up
- [ ] Try to book a service
- [ ] Check if email arrives

---

## ✅ You're Live!

Your app is now:
- ✅ Live on the internet
- ✅ HTTPS enabled (secure)
- ✅ Accessible on mobile & desktop
- ✅ Auto-deploys when you push to GitHub
- ✅ Free (Vercel free tier)

---

## Next Steps

### Add Custom Domain (Optional)
1. Buy domain (e.g., Namecheap, GoDaddy)
2. Vercel: Settings → Domains → Add
3. Follow DNS instructions
4. Update `NEXT_PUBLIC_APP_URL` to new domain

### Monitor Your App
- Vercel Dashboard: See traffic, errors
- Supabase Dashboard: See database usage
- Resend Dashboard: See email deliveries

---

## Common Issues

**Problem: Build fails**
- Check build logs in Vercel
- Ensure all environment variables are set

**Problem: "Authentication failed"**
- Verify Supabase redirect URLs include your Vercel URL
- Check Supabase keys are correct

**Problem: Emails not sending**
- Verify RESEND_API_KEY is set in Vercel
- Check Resend dashboard for errors

**Problem: 500 error**
- Check Vercel Function Logs
- Verify Supabase connection

---

## Get Help
- Vercel Support: https://vercel.com/support
- Supabase Docs: https://supabase.com/docs
- Your deployment checklist: See `DEPLOYMENT_CHECKLIST.md`
