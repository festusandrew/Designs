import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { ViewToggle } from '../components/ViewToggle';
import { FilterSort } from '../components/FilterSort';
import { ShiftCard } from '../components/ShiftCard';
import { BottomNavigation } from '../components/BottomNavigation';
import { mockShifts } from '../data/mockShifts';
import { Shift, ViewMode } from '../types';

export const ShiftsPage: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewMode>('list');
  const [activeTab, setActiveTab] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [shifts] = useState<Shift[]>(mockShifts);

  // Filter shifts based on search query
  const filteredShifts = useMemo(() => {
    if (!searchQuery) return shifts;
    
    return shifts.filter(shift =>
      shift.pharmacy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [shifts, searchQuery]);

  const handleShiftClick = (shift: Shift) => {
    console.log('Shift clicked:', shift);
    // Navigate to shift details or handle booking
  };

  const handleFilter = () => {
    console.log('Filter clicked');
    // Open filter modal
  };

  const handleSort = () => {
    console.log('Sort clicked');
    // Open sort modal
  };

  const renderContent = () => {
    switch (activeView) {
      case 'list':
        return (
          <div className="space-y-4">
            {filteredShifts.map((shift) => (
              <ShiftCard
                key={shift.id}
                shift={shift}
                onClick={handleShiftClick}
              />
            ))}
          </div>
        );
      case 'map':
        return (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">🗺️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Map View</h3>
            <p className="text-gray-600">Interactive map showing shift locations coming soon...</p>
          </div>
        );
      case 'calendar':
        return (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-2xl">📅</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendar View</h3>
            <p className="text-gray-600">Calendar view showing shifts by date coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header 
        title="Shifts" 
        showSearch={true}
        onSearch={setSearchQuery}
      />
      
      <div className="px-4 py-6">
        <ViewToggle 
          activeView={activeView}
          onViewChange={setActiveView}
        />
        
        <FilterSort 
          onFilter={handleFilter}
          onSort={handleSort}
        />
        
        {activeView === 'list' && filteredShifts.length === 0 && searchQuery && (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No shifts found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
        
        {renderContent()}
      </div>
      
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};