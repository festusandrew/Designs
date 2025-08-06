import React from 'react';
import { List, Map, Calendar } from 'lucide-react';
import { ViewMode } from '../types';
import { clsx } from 'clsx';

interface ViewToggleProps {
  activeView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ activeView, onViewChange }) => {
  const views = [
    { id: 'list' as ViewMode, icon: List, label: 'Shifts\nListing View' },
    { id: 'map' as ViewMode, icon: Map, label: 'Map\nListing View' },
    { id: 'calendar' as ViewMode, icon: Calendar, label: 'Calendar\nListing View' }
  ];

  return (
    <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
      {views.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onViewChange(id)}
          className={clsx(
            'flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all duration-200',
            activeView === id
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          )}
        >
          <Icon className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium text-center leading-tight whitespace-pre-line">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};