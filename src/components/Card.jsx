export default function Card({ 
  title, 
  children, 
  variant = 'elevated', 
  className = '', 
  ...props 
}) {
  const variants = {
    elevated: 'bg-surface shadow-lg hover:shadow-xl border border-border',
    outlined: 'bg-transparent border-2 border-border hover:border-primary/50',
    filled: 'bg-muted/10 border border-transparent hover:bg-muted/20',
  };

  return (
    <div 
      className={`
        p-8 rounded-2xl transition-all duration-300
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {title && (
        <h3 className="text-2xl font-bold mb-3 text-text">
          {title}
        </h3>
      )}
      <div className="text-muted leading-relaxed">
        {children}
      </div>
    </div>
  );
}
