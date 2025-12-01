# Google Rich Results Setup Guide

## What We Added

I've added Schema.org structured data (JSON-LD) to your site's layout that will help Google display your site with rich sitelinks like the Missouri Baptist Convention example.

## Update These Values in `src/layouts/Layout.astro`

### 1. Phone Number (Line 172)
Replace: `"telephone": "+1-XXX-XXX-XXXX"`
With your actual phone number

### 2. Street Address (Line 76 and 166)
Replace: `"streetAddress": "Jefferson City"`
With your actual street address (e.g., "123 Main Street")

### 3. Business Hours (Lines 173-180)
Update the `openingHoursSpecification` with your actual hours

### 4. Social Media Links (Lines 81-85)
Verify these URLs are correct:
- Facebook: https://www.facebook.com/gladiatorgamesjc
- Instagram: https://www.instagram.com/gladiatorgamesjc
- Discord: https://discord.gg/gladiatorgames

### 5. Geographic Coordinates (Lines 181-185)
Verify the latitude/longitude for your exact location

## How to Verify It's Working

### 1. Rich Results Test (Immediate)
Visit: https://search.google.com/test/rich-results
Enter: https://gladiatorgames.net
You should see:
- Organization
- WebSite
- ItemList
- LocalBusiness

### 2. Google Search Console (Recommended)
1. Go to https://search.google.com/search-console
2. Add your property (https://gladiatorgames.net)
3. Check "Enhancements" section for:
   - Sitelinks searchbox
   - Organization
   - Logo

### 3. Schema Markup Validator
Visit: https://validator.schema.org
Paste your homepage URL

## When Will Sitelinks Appear?

**Important**: Google doesn't guarantee sitelinks will appear. They:
- Typically show for branded searches ("Gladiator Games")
- Require time to crawl and index (weeks to months)
- Depend on site authority and user behavior
- Are algorithmically determined

## Additional SEO Improvements

### Already Have:
- ✅ Sitemap (via @astrojs/sitemap)
- ✅ Meta descriptions
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter cards

### Recommended:
1. **Submit sitemap to Google Search Console**
   - URL: https://gladiatorgames.net/sitemap-index.xml

2. **Create Google Business Profile**
   - Links to LocalBusiness schema
   - Improves local search visibility

3. **Build quality backlinks**
   - Gaming blogs
   - Local directories
   - Partner sites

4. **Regular content updates**
   - Blog posts about gaming
   - Event announcements
   - Tournament recaps

## The 6 Categories That Will Show as Sitelinks

Based on your site structure, these are the most important pages Google will likely show:

1. **Events & Tournaments** - `/events`
2. **Birthday Parties** - `/parties`
3. **Pricing & Memberships** - `/pricing`
4. **Gift Cards** - `/gift-cards`
5. **Gaming Tools & Resources** - `/tools`
6. **Visit Us** - `/visit`

Make sure these pages have:
- Clear, descriptive titles
- Unique meta descriptions
- Quality content
- Good internal linking

## Testing Your Changes

After deploying:
1. Build your site: `npm run build`
2. Test locally: `npm run preview`
3. View page source and look for the `<script type="application/ld+json">` tag
4. Deploy to production
5. Wait 24-48 hours for Google to re-crawl
6. Test with Rich Results Test tool
