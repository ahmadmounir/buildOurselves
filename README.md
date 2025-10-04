# 🕌 Build Ourselves - Islamic Educational Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green)](https://supabase.com/)

## 🌟 Overview

**Build Ourselves** (فلنبنِ أنفسنا) is a comprehensive Islamic educational platform designed to provide spiritual development and self-improvement through practical Islamic teachings. The platform offers structured learning experiences that combine beneficial knowledge with daily life applications.

### 🎯 Mission
To create a complete journey in self-purification and spiritual refinement, offering practical lessons that merge beneficial Islamic knowledge with real-world application.

## ✨ Features

### 🎓 Educational Content
- **Structured Lectures**: Organized lecture schedules with Islamic teachings
- **Teacher Profiles**: Detailed information about qualified Islamic scholars
- **Interactive Learning**: Engaging content delivery system

### 📊 Management System
- **Admin Dashboard**: Comprehensive administration panel
- **User Management**: Complete user registration and authentication
- **Content Management**: Easy lecture and content management
- **Analytics**: Statistical insights and progress tracking

### 🔧 Technical Features
- **Responsive Design**: Mobile-first responsive web application
- **Real-time Updates**: Live lecture schedules and notifications
- **SEO Optimized**: Built-in sitemap generation and optimization
- **Modern UI/UX**: Clean, accessible interface with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Backend**: Next.js API Routes, Supabase
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js with Supabase adapter
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager
- Supabase account and project

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ahmadmounir/buildOurselves.git
cd buildOurselves
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file and configure your environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Application Structure

```
app/
├── home/              # Main landing page
├── admin/             # Admin dashboard
│   ├── dashboard/     # Analytics and overview
│   ├── mosques/       # Mosque management
│   └── settings/      # Application settings
├── login/             # Authentication
└── api/               # API endpoints
    ├── lectures/      # Lecture management
    ├── users/         # User management
    └── youtube/       # YouTube integration
```

## 🔐 Authentication & Authorization

The platform includes a robust authentication system with:
- User registration and login
- Admin role management
- Protected routes and API endpoints
- Session management with NextAuth.js

## 📊 Admin Features

- **Dashboard Analytics**: User engagement and lecture statistics
- **Content Management**: Add, edit, and organize lectures
- **User Management**: Monitor and manage registered users
- **Settings Panel**: Configure application parameters

## 🌍 Internationalization

Currently supporting:
- Arabic (Primary)
- English
- Turkish (Planned)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email ahmadmallak2004@gmail.com or create an issue in this repository.

---

# 🕌 Kendimizi Geliştirelim - İslami Eğitim Platformu

## 🌟 Genel Bakış

**Kendimizi Geliştirelim** (فلنبنِ أنفسنا), pratik İslami öğretiler aracılığıyla manevi gelişim ve kişisel gelişim sağlamak için tasarlanmış kapsamlı bir İslami eğitim platformudur. Platform, faydalı bilgiyi günlük yaşam uygulamalarıyla birleştiren yapılandırılmış öğrenme deneyimleri sunar.

### 🎯 Misyon
Nefs terbiyesi ve ruhsal arınmada eksiksiz bir yolculuk yaratmak, faydalı İslami bilgiyi gerçek dünya uygulamasıyla birleştiren pratik dersler sunmak.

## ✨ Özellikler

### 🎓 Eğitim İçeriği
- **Yapılandırılmış Dersler**: İslami öğretilerle organize edilmiş ders programları
- **Öğretmen Profilleri**: Nitelikli İslam alimları hakkında detaylı bilgiler
- **Etkileşimli Öğrenme**: Özgün içerik sunum sistemi

### 📊 Yönetim Sistemi
- **Yönetici Paneli**: Kapsamlı yönetim paneli
- **Kullanıcı Yönetimi**: Eksiksiz kullanıcı kaydı ve kimlik doğrulama
- **İçerik Yönetimi**: Kolay ders ve içerik yönetimi
- **Analitik**: İstatistiksel öngörüler ve ilerleme takibi

### 🔧 Teknik Özellikler
- **Responsive Tasarım**: Mobil öncelikli responsive web uygulaması
- **Gerçek Zamanlı Güncellemeler**: Canlı ders programları ve bildirimler
- **SEO Optimize**: Yerleşik site haritası oluşturma ve optimizasyon
- **Modern UI/UX**: Tailwind CSS ile temiz, erişilebilir arayüz

## 🛠️ Teknoloji Yığını

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Bileşenleri
- **Backend**: Next.js API Rotaları, Supabase
- **Veritabanı**: Supabase (PostgreSQL)
- **Kimlik Doğrulama**: Supabase adaptörü ile NextAuth.js
- **Deployment**: Vercel-hazır yapılandırma

## 🚀 Başlangıç

### Gereksinimler
- Node.js 18+
- npm, yarn, pnpm veya bun paket yöneticisi
- Supabase hesabı ve projesi

### Kurulum

1. **Depoyu klonlayın**
```bash
git clone https://github.com/ahmadmounir/buildOurselves.git
cd buildOurselves
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Ortam Kurulumu**
`.env.local` dosyası oluşturun ve çevre değişkenlerinizi yapılandırın:
```env
NEXT_PUBLIC_SUPABASE_URL=supabase_url_niz
NEXT_PUBLIC_SUPABASE_ANON_KEY=supabase_anon_key_niz
NEXTAUTH_SECRET=nextauth_secret_niz
NEXTAUTH_URL=http://localhost:3000
```

4. **Geliştirme sunucusunu çalıştırın**
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Uygulamayı görüntülemek için [http://localhost:3000](http://localhost:3000) adresini açın.

## 🤝 Katkıda Bulunma

1. Depoyu fork edin
2. Özellik dalınızı oluşturun (`git checkout -b feature/HarikaBirOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika bir özellik ekle'`)
4. Dala push edin (`git push origin feature/HarikaBirOzellik`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🆘 Destek

Destek için ahmadmallak2004@gmail.com adresine e-posta gönderin veya bu repoda bir issue oluşturun.
