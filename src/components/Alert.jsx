export default function Alert({ 
  variant = 'info', 
  title, 
  children, 
  dismissible = false, 
  onDismiss, 
  className = '', 
  ...props 
}) {
  const variants = {
    info: 'bg-primary/10 border-primary text-primary dark:bg-primary/20',
    success: 'bg-success/10 border-success text-success dark:bg-success/20',
    warning: 'bg-accent/10 border-accent text-accent dark:bg-accent/20',
    error: 'bg-error/10 border-error text-error dark:bg-error/20',
  };

  return (
    <div 
      role="alert" 
      className={`
        border-l-4 rounded-r-lg p-5 flex justify-between items-start transition-all duration-300
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      <div className="flex-1">
        {title && (
          <p className="font-bold text-lg mb-1">{title}</p>
        )}
        <div className="text-sm opacity-90 leading-relaxed">
          {children}
        </div>
      </div>
      
      {dismissible && (
        <button 
          onClick={onDismiss} 
          className="ml-4 p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors opacity-60 hover:opacity-100"
          aria-label="Kapat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
