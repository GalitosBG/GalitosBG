const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[#ffce04] ${className} hover:bg-[#c43937] transition-all duration-500 hover:text-white mt-5 text-[#000] font-bold text-[.8rem] py-3 px-5 `}
    >
      {text}
    </button>
  );
};

export default Button;
