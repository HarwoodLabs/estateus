# Estateus 🏠

Your Gateway to Premium Real Estate

## Overview

Estateus is a modern, professional real estate platform built with Next.js 15, TypeScript, and Tailwind CSS. The platform provides a comprehensive solution for property discovery, investment opportunities, and real estate market navigation.

## Features

- 🎨 **Professional Design**: Modern, responsive UI with beautiful gradients and animations
- 🔍 **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- 📱 **Mobile First**: Responsive design that works perfectly on all devices
- ⚡ **Performance**: Built with Next.js 15 for optimal performance and SEO
- 🎯 **Real Estate Focused**: Tailored specifically for real estate professionals and investors

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Theming**: Next Themes for dark/light mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/estateus.git
cd estateus
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
estateus/
├── app/                    # Next.js 15 app directory
│   ├── layout.tsx         # Root layout with meta tags
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
├── public/                 # Static assets
│   ├── og-image.svg       # Open Graph image
│   ├── favicon.svg        # SVG favicon
│   ├── site.webmanifest   # Web app manifest
│   └── ...                # Other favicon sizes
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
└── styles/                 # Additional styling
```

## Assets & Branding

### Favicon
- **SVG**: `/public/favicon.svg` - Scalable vector favicon
- **PNG**: Multiple sizes for different devices and browsers
- **Theme**: Blue (#3b82f6) with white house icon

### Open Graph Image
- **Size**: 1200x630px (optimal for social media)
- **Format**: SVG (can be converted to PNG)
- **Design**: Professional real estate theme with house icon

### Meta Tags
- **SEO**: Comprehensive meta descriptions and keywords
- **Social**: Open Graph and Twitter Card support
- **Branding**: Estateus-specific titles and descriptions

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Colors
Update the color scheme in `tailwind.config.ts` and `app/globals.css`

### Branding
Modify the meta tags in `app/layout.tsx` to match your brand

### Assets
Replace the favicon and OG image in the `public/` directory

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@estateus.xyz or create an issue in this repository.

---

**Built with ❤️ by the Estateus Team**
