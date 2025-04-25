
export const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card-content p-4">{children}</div>
);
