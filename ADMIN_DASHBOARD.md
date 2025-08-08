# Admin Dashboard - BuildOurselves

## Overview
A comprehensive admin dashboard built with Next.js 15, TypeScript, and Tailwind CSS, designed specifically for Arabic (RTL) layout and responsive across all devices.

## Features

### 🏠 Dashboard Page (`/admin/dashboard`)
- **Statistics Cards**: Display key metrics including:
  - Total page views
  - New messages from users
  - Number of registered mosques
  - Active users count
- **Recent Visits Chart**: Weekly visit statistics
- **Recent Messages**: Latest user inquiries and feedback
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### 🕌 Mosques Management (`/admin/mosques`)
- **Full CRUD Operations**: Create, Read, Update, Delete mosques
- **Comprehensive Form Fields**:
  - Mosque name (`mosqueName`)
  - Lesson title (`title`)
  - Lesson type (`type`) - e.g., "تزكية", "فقه", "عقيدة"
  - City (`city`)
  - Day of the week (`day`)
  - Frequency (`date`) - e.g., "أسبوعياً", "يومياً"
  - Start time (`time.start`)
  - End time (`time.end`)
  - Location link (`location`) - Google Maps URL
  - Description (`description`)
  - Image URL (`image`)
  - Image alt text (`imageAlt`)

- **Interactive Table**: View all mosques with sorting and filtering
- **Modal Forms**: Add/edit mosques using responsive modal dialogs
- **Action Buttons**: Edit, view location, and delete functionality

### ⚙️ Settings Page (`/admin/settings`)
- **Admin Information Management**:
  - Full name
  - Email address
  - Phone number
  - Website URL
  - Address
- **Account Statistics**: Quick overview of account metrics
- **System Settings**: Toggle various system features
- **Edit Modal**: Update admin information with validation

## Technical Implementation

### Components Structure
```
components/
├── ui/
│   ├── button.tsx          # Reusable button component
│   ├── card.tsx           # Card component for layouts
│   ├── input.tsx          # Form input component
│   ├── label.tsx          # Form label component
│   ├── textarea.tsx       # Multi-line text input
│   ├── table.tsx          # Table components for data display
│   ├── dialog.tsx         # Modal dialog component
│   ├── badge.tsx          # Badge/tag component
│   └── sidebar.tsx        # Sidebar navigation component
├── admin-sidebar.tsx      # Admin navigation sidebar
└── admin-header.tsx       # Admin page header
```

### Pages Structure
```
app/admin/
├── layout.tsx             # Admin layout with sidebar
├── page.tsx              # Redirects to dashboard
├── dashboard/
│   └── page.tsx          # Main dashboard with statistics
├── mosques/
│   └── page.tsx          # Mosques management interface
└── settings/
    └── page.tsx          # Admin settings and preferences
```

### RTL Support
- Full Arabic text support
- Right-to-left layout direction
- Responsive sidebar that adapts to RTL
- Arabic-optimized form layouts
- RTL-aware animations and transitions

### Mobile Responsiveness
- **Mobile-first Design**: Optimized for mobile devices
- **Collapsible Sidebar**: Toggle navigation on mobile
- **Responsive Tables**: Horizontal scroll on mobile
- **Touch-friendly**: Large buttons and touch targets
- **Adaptive Cards**: Stack on smaller screens

## Data Structure

### Mosque Entity
```typescript
interface Mosque {
  id: string
  type: string                    // Lesson type
  title: string                  // Lesson title
  date: string                   // Frequency (weekly, daily, etc.)
  day: string                    // Day of the week
  city: string                   // City name
  time: {
    start: string               // Start time
    end: string                 // End time
  }
  mosqueName: string            // Mosque name
  location: string              // Google Maps URL
  description: string           // Lesson description
  image: string                 // Image URL
  imageAlt: string             // Image alt text
}
```

### Admin Info Entity
```typescript
interface AdminInfo {
  fullName: string
  email: string
  phone: string
  website: string
  address: string
}
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Access Admin Dashboard**:
   - Navigate to `http://localhost:3000/admin`
   - Automatically redirects to `/admin/dashboard`

## Navigation

The admin dashboard includes a persistent sidebar with the following navigation:

- **لوحة التحكم** (Dashboard) - `/admin/dashboard`
- **المساجد** (Mosques) - `/admin/mosques`
- **الإعدادات** (Settings) - `/admin/settings`

## Responsive Breakpoints

- **Mobile**: < 768px - Collapsible sidebar, stacked cards
- **Tablet**: 768px - 1024px - Adaptive grid layouts
- **Desktop**: > 1024px - Full sidebar, multi-column layouts

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] File upload for mosque images
- [ ] Advanced search and filtering
- [ ] Export functionality (CSV, PDF)
- [ ] Email notifications system
- [ ] Analytics dashboard with charts
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Backup and restore functionality

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React useState/useContext
- **Responsive Design**: CSS Grid & Flexbox with Tailwind
- **RTL Support**: CSS direction and Tailwind RTL utilities
