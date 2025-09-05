import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="card text-center py-8">
      <div className="text-red-500 mb-4">
        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[var(--cor-texto)] mb-2">Ops! Algo deu errado</h3>
      <p className="text-[var(--cor-texto-claro)] mb-4">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-primary">
          Tentar novamente
        </button>
      )}
    </div>
  );
};