# Vercel Deployment Checklist

## Prerequisites
- [ ] GitHub repository is up to date
- [ ] All tests passing locally
- [ ] Build successful (`npm run build`)
- [ ] Supabase production project created
- [ ] Resend API key obtained
- [ ] Admin email configured

## Step 1: Prepare Environment Variables

Before deploying, gather these values:

### Required Variables
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxx
ADMIN_EMAIL=admin@example.com
```

### Optional Variables
```env
SENDER_EMAIL=notifications@yourdomain.com
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
SENTRY_AUTH_TOKEN=sntrys_xxxxx
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. **Visit Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub

2. **Import Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `rockmrack/Hampstead-On-Demand`

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
   - Node Version: **20.x**

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from Step 1
   - Select environment: **Production** (at minimum)
   - Optionally add to Preview and Development

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Get your URL: `hampstead-on-demand.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Supabase

Update Supabase authentication settings:

1. **Go to Supabase Dashboard**
   - Authentication → URL Configuration

2. **Add Site URL**
   ```
   https://your-domain.vercel.app
   ```

3. **Add Redirect URLs**
   ```
   https://your-domain.vercel.app/auth/callback
   https://your-domain.vercel.app/**
   ```

4. **Update Email Templates**
   - Replace localhost URLs with production URL

## Step 4: Test Deployment

Visit your deployed site and verify:

- [ ] Homepage loads
- [ ] Services page displays
- [ ] Search functionality works
- [ ] Booking form accessible
- [ ] Login/Signup works
- [ ] Email notifications sent
- [ ] Admin dashboard accessible
- [ ] Chatbot functions
- [ ] Mobile responsive
- [ ] HTTPS enabled (automatic)

## Step 5: Add Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Project Settings → Domains
   - Add your domain: `hampstead-on-demand.com`

2. **Update DNS Records**
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Or A record for root domain (follow Vercel instructions)

3. **Update Environment Variables**
   ```env
   NEXT_PUBLIC_APP_URL=https://hampstead-on-demand.com
   ```

4. **Update Supabase URLs**
   - Add custom domain to Supabase redirect URLs

## Step 6: Enable Auto-Deployments

Vercel automatically deploys when you:
- Push to `master` branch → Production
- Create Pull Request → Preview deployment
- Push to any branch → Preview deployment

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify environment variables are set
- Ensure `npm run build` works locally

### 500 Error on Runtime
- Check Vercel Function Logs
- Verify Supabase connection
- Check environment variables

### Authentication Not Working
- Verify Supabase redirect URLs
- Check NEXT_PUBLIC_APP_URL matches deployment URL
- Ensure Supabase keys are correct

### Emails Not Sending
- Verify RESEND_API_KEY is set
- Check Resend dashboard for errors
- Verify ADMIN_EMAIL is correct

## Post-Deployment

- [ ] Set up Sentry error monitoring
- [ ] Configure Vercel Analytics
- [ ] Set up uptime monitoring
- [ ] Add deployment webhook notifications
- [ ] Document deployment process for team

## Rollback Plan

If something goes wrong:

1. **Instant Rollback**
   - Vercel Dashboard → Deployments
   - Find previous working deployment
   - Click "..." → "Promote to Production"

2. **Git Rollback**
   ```bash
   git revert HEAD
   git push
   # Vercel auto-deploys the revert
   ```

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
