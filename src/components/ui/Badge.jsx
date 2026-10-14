const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-soft-green text-emerald-green border border-emerald-green/20 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
