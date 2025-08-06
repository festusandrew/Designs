import React from 'react';
import { List, Calendar, User, MoreHorizontal, Clock } from 'lucide-react';
import { clsx } from 'clsx';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'list', icon: List, label: 'List' },
    { id: 'shift', icon: Clock, label: 'Shift' },
    { id: 'availability', icon: Calendar, label: 'Availability' },
    { id: 'profile', icon: User, label: 'My Profile' },
    { id: 'more', icon: MoreHorizontal, label: 'More' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={clsx(
              'flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors min-w-0',
              activeTab === id
                ? 'text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};