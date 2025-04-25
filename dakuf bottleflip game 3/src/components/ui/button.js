
export const Button = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded font-semibold transition duration-200 ${className}`}
  >
    {children}
  </button>
);
