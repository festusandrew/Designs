import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';
import { FilterOptions, SortOptions } from '../types';

interface FilterSortProps {
  onFilter: () => void;
  onSort: () => void;
}

export const FilterSort: React.FC<FilterSortProps> = ({ onFilter, onSort }) => {
  return (
    <div className="flex space-x-3 mb-6">
      <button
        onClick={onFilter}
        className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-sm"
      >
        <Filter className="w-5 h-5" />
        <span>Filter</span>
      </button>
      
      <button
        onClick={onSort}
        className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-sm"
      >
        <ArrowUpDown className="w-5 h-5" />
        <span>Sort</span>
      </button>
    </div>
  );
};