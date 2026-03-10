export default function Input({ 
  id, 
  label, 
  error, 
  helpText, 
  type = 'text', 
  className = '', 
  ...props 
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-semibold text-text opacity-90"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`
          w-full px-4 py-2.5 rounded-lg border transition-all outline-none bg-surface
          ${error 
            ? 'border-error focus:ring-2 focus:ring-error/20' 
            : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
          }
          ${props.disabled ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800' : ''}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-error font-medium">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-sm text-muted">{helpText}</p>
      )}
    </div>
  );
}
