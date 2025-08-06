# Modern Locum Pharmacy App

A modern, responsive web application for locum pharmacists to browse and manage available shifts. Built with React, TypeScript, and Tailwind CSS.

## Features

### ✨ Modern Design
- Clean, contemporary UI with smooth animations
- Mobile-first responsive design
- Professional color scheme with green accent colors
- Intuitive navigation and user experience

### 📱 Core Functionality
- **Shift Listings**: Browse available pharmacy shifts with detailed information
- **Multiple View Modes**: 
  - List view (fully implemented)
  - Map view (placeholder for future development)
  - Calendar view (placeholder for future development)
- **Search & Filter**: Real-time search functionality across shifts
- **Interactive Cards**: Clickable shift cards with comprehensive information
- **Bottom Navigation**: Easy access to different app sections

### 🔍 Shift Information Display
- Pharmacy name and position
- Date, time, and duration
- Hourly rate and total pay
- Break information
- Location details
- Availability status

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **React Router DOM** - Client-side routing

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # App header with search
│   ├── ViewToggle.tsx  # View mode switcher
│   ├── FilterSort.tsx  # Filter and sort controls
│   ├── ShiftCard.tsx   # Individual shift display
│   └── BottomNavigation.tsx # Bottom navigation bar
├── pages/
│   └── ShiftsPage.tsx  # Main shifts listing page
├── types/
│   └── index.ts        # TypeScript type definitions
├── data/
│   └── mockShifts.ts   # Mock data for development
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Design Improvements Over Original

### 🎨 Visual Enhancements
- **Modern Card Design**: Elevated cards with subtle shadows and rounded corners
- **Better Typography**: Clean, readable font hierarchy
- **Improved Color Palette**: Professional green theme with proper contrast
- **Enhanced Spacing**: Better visual breathing room and layout
- **Interactive Elements**: Hover effects and smooth transitions

### 📱 User Experience
- **Responsive Layout**: Works seamlessly on mobile and desktop
- **Real-time Search**: Instant filtering as you type
- **Clear Information Hierarchy**: Important details prominently displayed
- **Intuitive Navigation**: Familiar bottom navigation pattern
- **Visual Feedback**: Status indicators and interactive states

### 🔧 Technical Improvements
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable components
- **Performance**: Optimized rendering with React hooks
- **Modern Tooling**: Vite for fast development and building
- **Scalable CSS**: Utility-first approach with Tailwind

## Future Enhancements

- **Map Integration**: Interactive map showing shift locations
- **Calendar View**: Monthly/weekly calendar with shift scheduling
- **Advanced Filtering**: Filter by pay rate, distance, pharmacy type
- **Booking System**: Ability to book and manage shifts
- **User Authentication**: Login and profile management
- **Push Notifications**: Real-time shift updates
- **Offline Support**: Cache shifts for offline viewing

## Contributing

This is a demonstration project showcasing modern web development practices for a locum pharmacy application. The codebase is structured to be easily extensible for additional features.

## License

This project is for demonstration purposes.
