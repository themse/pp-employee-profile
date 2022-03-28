import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="bg-primary text-white font-text-100 text-xl px-4 py-2 rounded"
      {...props}
    >
      {children}
    </button>
  );
};
