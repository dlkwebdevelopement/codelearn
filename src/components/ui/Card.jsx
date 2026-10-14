const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white rounded-card p-6 shadow-soft transition-all duration-300
      ${hover ? 'hover:shadow-large hover:-translate-y-2 hover:border-emerald-green border border-transparent' : 'border border-pale-green'}
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
