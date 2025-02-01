import {ArrowRightIcon} from '@heroicons/react/24/outline'


const ButtonIcon = ({label, icon}) => {
    return (
      <button className="flex justify-center items-center gap-2 p-3 text-neutral-900">
        <span>{label}</span>
        <ArrowRightIcon className="w-5 h-5" /> {/* Icon */}        
      </button>
    );
  };
  
  export default ButtonIcon;