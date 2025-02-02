const ButtonPrimary = ({label}) => {
  return (
    <button className="flex justify-center items-center py-2 px-3 m-2 border rounded-md border-brand-default bg-neutral-800 text-neutral-100 hover:bg-neutral-950">
      {label}
    </button>
  );
};

export default ButtonPrimary;
