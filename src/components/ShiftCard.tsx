import React from 'react';
import { Calendar, Clock, MapPin, PoundSterling, Building2 } from 'lucide-react';
import { Shift } from '../types';

interface ShiftCardProps {
  shift: Shift;
  onClick?: (shift: Shift) => void;
}

export const ShiftCard: React.FC<ShiftCardProps> = ({ shift, onClick }) => {
  return (
    <div 
      className="card p-5 mb-4 hover:shadow-medium transition-all duration-200 cursor-pointer border-l-4 border-l-primary-500"
      onClick={() => onClick?.(shift)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Building2 className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600">{shift.pharmacy}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{shift.position}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary-600">£{shift.payRate}</div>
          <div className="text-xs text-gray-500">per hour</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{shift.date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{shift.startTime} - {shift.endTime} ({shift.duration})</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <MapPin className="w-4 h-4" />
        <span>{shift.location}</span>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="text-gray-500">Total Pay: </span>
            <span className="font-semibold text-gray-900">£{shift.totalPay}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">{shift.unpaidBreak} minutes unpaid</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
            shift.status === 'available' 
              ? 'bg-green-100 text-green-700' 
              : shift.status === 'booked'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-gray-100 text-gray-700'
          }`}>
            {shift.status === 'available' ? 'Available' : shift.status}
          </span>
        </div>
      </div>
    </div>
  );
};