import className from 'classnames';
import { GoSync } from 'react-icons/go';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  loading,
  ...rest
}) => {
  const classes = className(
    rest.className,
    'flex items-center px-4 py-2 border h-8',
    {
      'opacity-80': loading,
      'bg-blue-500 border-blue-500 text-white': primary,
      'bg-black border-black text-white': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-yellow-500 border-yellow-500 text-white': warning,
      'bg-red-500 border-red-500 text-white': danger,
      'rounded-full': rounded,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        'There is only primary, secondary, success, warning, danger can be used'
      );
    }
  },
};

export default Button;
