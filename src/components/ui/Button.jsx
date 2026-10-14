const variants = {
  primary: 'bg-btn-gradient text-white shadow-md hover:scale-[1.03]',
  secondary: 'bg-white border-2 border-emerald-green text-emerald-green hover:bg-btn-gradient hover:text-white hover:border-transparent',
  success: 'bg-emerald-green text-white shadow-md hover:scale-[1.03]',
  danger: 'bg-red-500 text-white shadow-md hover:scale-[1.03]',
  outline: 'bg-transparent border-2 border-emerald-green text-emerald-green hover:bg-emerald-green hover:text-white',
};

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`px-6 py-2.5 rounded-btn font-semibold transition-all duration-300 ease-out ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
