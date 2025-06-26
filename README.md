
# Farmetrics - Digital Monitoring Platform for Cocoa Farming

## Project Overview

Farmetrics is a comprehensive digital monitoring and data collection platform for cocoa farming field operations in Ghana. It consists of two integrated systems:

1. **Farmetrics Mobile App** (Android, Flutter) - Used by field officers for on-site data collection
2. **Farmetrics Admin Web Software** (React/TypeScript) - Used by supervisors and administrators

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Authentication, Storage, Edge Functions)
- **Development**: Lovable.dev
- **Mobile**: Flutter (separate repository)

## Implementation Checklist

### ✅ Database Schema (Completed)
- [x] User profiles and roles (admin, supervisor, analyst, field_officer)
- [x] Farmers registration data
- [x] Farm visits with GPS and polygon boundaries
- [x] Media files with EXIF/GPS metadata
- [x] Issue reports and tracking
- [x] Transfer requests management
- [x] Todo tasks system
- [x] Row Level Security (RLS) policies
- [x] Storage bucket for media files

### 🔄 Web Application Features (In Progress)

#### Authentication & User Management
- [ ] Supabase authentication integration
- [ ] Role-based access control
- [ ] User profile management

#### Dashboard & Analytics
- [ ] Real-time metrics overview
- [ ] Charts and visualizations
- [ ] Field officer activity monitoring
- [ ] Regional performance analytics

#### Data Management
- [ ] Farmer database with search/filter
- [ ] Farm visit logs with media gallery
- [ ] GPS polygon visualization
- [ ] Data export functionality (Excel/CSV)

#### Issue & Request Management
- [ ] Issue reports with status tracking
- [ ] Transfer request approval workflow
- [ ] Supervisor comments and feedback

#### Task Management
- [ ] Todo task assignment
- [ ] Progress tracking
- [ ] Notification system

### 📱 Mobile App Features (External Development)
- [ ] Offline-first data collection
- [ ] GPS and polygon capture
- [ ] Camera with EXIF/GPS metadata
- [ ] Farmer registration
- [ ] Issue reporting
- [ ] Data synchronization

## Database Schema

### Core Tables

1. **profiles** - User management with roles
2. **farmers** - Registered farmer information
3. **farm_visits** - Visit data with GPS and environmental info
4. **media_files** - Photos/videos with metadata
5. **issue_reports** - Field issues and tracking
6. **transfer_requests** - Officer transfer management
7. **todo_tasks** - Task assignment and tracking

### Key Features

- **Authentication**: Supabase Auth with JWT tokens
- **File Storage**: Supabase Storage for media files
- **Real-time**: Live data updates across systems
- **Security**: Row Level Security (RLS) for data protection
- **Offline Support**: Mobile app works offline with sync

## API Integration

The web application connects to Supabase using:
- Supabase JavaScript client
- Real-time subscriptions
- RESTful API patterns
- Authenticated requests with JWT

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Supabase credentials
4. Run development server: `npm run dev`

## Future Enhancements

- [ ] AI integration for crop quality prediction
- [ ] GIS satellite data overlays
- [ ] SMS/Push notification system
- [ ] Advanced analytics and reporting
- [ ] Multi-language support

## Contributing

This project follows the PRD specifications for field data collection and administrative management in Ghana's cocoa farming sector.
