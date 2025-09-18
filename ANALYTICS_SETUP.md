# Analytics Setup Guide for PA Prep Lab

## 🚀 Google Analytics 4 Setup

### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in bottom left)
3. Click **Create Property**
4. Enter property details:
   - **Property name**: PA Prep Lab
   - **Reporting time zone**: Your timezone
   - **Currency**: USD
5. Choose **Business objectives**: "Generate leads"
6. Complete the setup

### Step 2: Get Your Measurement ID
1. In your new GA4 property, go to **Admin** > **Data Streams**
2. Click **Add stream** > **Web**
3. Enter your website URL: `https://papreplab.com` (or your domain)
4. Copy the **Measurement ID** (starts with G-)

### Step 3: Add Environment Variable
1. Open your `.env.local` file
2. Add this line:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Step 4: Deploy and Test
1. Restart your development server: `npm run dev`
2. Visit your site and check the browser console for GA initialization
3. In GA4, go to **Reports** > **Realtime** to see live visitors

## 🔍 Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **Add property**
3. Choose **URL prefix** and enter your domain: `https://papreplab.com`

### Step 2: Verify Ownership
Choose one verification method:

**Option A: HTML Tag (Recommended)**
1. Copy the meta tag provided
2. Add it to your site's `<head>` section
3. Click **Verify**

**Option B: DNS Verification**
1. Add the TXT record to your domain's DNS settings
2. Wait for propagation (up to 24 hours)
3. Click **Verify**

### Step 3: Submit Sitemap
1. In Search Console, go to **Sitemaps**
2. Submit your sitemap URL: `https://papreplab.com/sitemap.xml`
3. Next.js automatically generates this for you

### Step 4: Set Up Indexing
1. Go to **URL Inspection**
2. Test your main pages:
   - `/` (homepage)
   - `/about`
   - `/pricing`
   - `/faq`
   - `/contact`
3. Click **Request Indexing** for each page

## 📊 What Data You'll Get

### Google Analytics 4
- **Real-time visitors** and page views
- **User demographics** and interests
- **Traffic sources** (Google, direct, social, etc.)
- **Page performance** and user flows
- **Custom events** we've set up:
  - Contact form submissions with selected services
  - Pricing card Apply button clicks
  - Email and phone clicks
  - Navigation interactions

### Google Search Console
- **Search performance**: impressions, clicks, CTR, position
- **Search queries**: what people search to find you
- **Page performance**: which pages get the most search traffic
- **Technical issues**: crawl errors, mobile usability
- **Index coverage**: which pages Google has indexed

## 🎯 Key Metrics to Monitor

### For PA Prep Lab Business
1. **Contact form submissions** by service type
2. **Most popular services** (from Apply button clicks)
3. **Traffic sources** driving qualified leads
4. **Seasonal trends** (application deadlines, interview seasons)
5. **Search queries** revealing market demand

### SEO Opportunities
1. **Low CTR pages** that need better titles/descriptions
2. **High impression, low click** queries needing content
3. **Mobile usability** issues to fix
4. **Page speed** improvements needed

## 🚨 Privacy Compliance

The setup includes:
- **GDPR compliance**: Analytics only loads after user consent
- **Data minimization**: Only essential tracking enabled
- **User control**: Easy opt-out mechanisms

## 🔧 Troubleshooting

### GA4 Not Tracking
1. Check `.env.local` has correct Measurement ID
2. Restart development server
3. Check browser console for errors
4. Verify in GA4 Realtime reports

### Search Console Not Verifying
1. Ensure verification code is in `<head>` section
2. Check for syntax errors in HTML
3. Try alternative verification methods
4. Clear browser cache and retry

## 🎉 You're All Set!

Once configured, you'll have enterprise-level analytics for free! Data will start appearing within:
- **Google Analytics**: Immediately (realtime), full reports in 24-48 hours
- **Search Console**: 1-3 days for basic data, 1-2 weeks for full insights