# Deployment Guide

The site has been built as static files in the `dist/` folder and is ready for deployment.

## Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/aaronalston/MAILABS/my-app
vercel --prod
```

Or drag & drop the `dist/` folder to [vercel.com](https://vercel.com)

## Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd /Users/aaronalston/MAILABS/my-app
netlify deploy --dir=dist --prod
```

Or drag & drop the `dist/` folder to [netlify.com](https://netlify.com)

## Option 3: AWS S3 + CloudFront

```bash
# Sync to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache (if using CloudFront)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Option 4: GitHub Pages

```bash
# Install gh-pages
npm i -g gh-pages

# Deploy
cd /Users/aaronalston/MAILABS/my-app
gh-pages -d dist
```

## Option 5: Any Static Hosting

Simply upload all files from the `dist/` folder to your web server or hosting provider.

---

## Build Configuration

The site is configured for static export in `next.config.ts`:

```typescript
{
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
}
```

This ensures:
- All pages are pre-rendered as HTML
- Assets are optimized
- URLs work correctly (e.g., `/en/member/`)

## Rebuilding

If you make changes:

```bash
cd /Users/aaronalston/MAILABS/my-app
npm run build
```

Then redeploy the `dist/` folder.
