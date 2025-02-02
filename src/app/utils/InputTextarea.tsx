import React,{ChangeEvent} from 'react'

type InputTextareProps = {
     label:string,
     name:string,
     value:string;
     placeholder:string;
     handleChange:( e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputTextarea = ({label,name,value,handleChange,placeholder}:InputTextareProps) => {
  return (
    <div >
          <label className="block mb-1 text-gray-300">{label}</label>
          <textarea
            name={name}
            rows={4}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full p-2 bg-gray-700 rounded-md border border-gray-500 focus:border-blue-200 outline-none text-gray-300"
          />
        </div>

  )
}

export default InputTextarea
