import {ArrowRightIcon} from '@heroicons/react/24/outline'


const ButtonIcon = ({label, icon}) => {
    return (
      <button className="flex justify-center items-center gap-2 py-2 px-3 m-2 border border-neutral-300 rounded-md text-neutral-950 hover:border-neutral-950">
        <span>{label}</span>
        <ArrowRightIcon className="w-5 h-5" /> 
      </button>
    );
  };
  
  export default ButtonIcon;