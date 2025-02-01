const ButtonPrimary = ({label}) => {
  return (
    <button className="flex justify-center items-center p-2 pl-3 pr-3 m-2 border rounded-md border-brand-default bg-neutral-900 text-neutral-100">
      {label}
    </button>
  );
};

export default ButtonPrimary;
