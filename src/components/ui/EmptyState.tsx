import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon, 
  action 
}) => {
  return (
    <div className="card text-center py-12">
      {icon && (
        <div className="text-[var(--cor-texto-muito-claro)] mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--cor-texto)] mb-2">{title}</h3>
      <p className="text-[var(--cor-texto-claro)] mb-6">{description}</p>
      {action}
    </div>
  );
};