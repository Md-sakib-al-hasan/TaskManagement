
type InputIimageFiled = {
    label:string;
    handleFileChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputImageFiled = ({label,handleFileChange,}:InputIimageFiled) => {
  return (
    <div className="col-span-1 md:col-span-2">
    <label className="block text-gray-300 mb-1">{label}</label>
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="w-full p-2 bg-gray-700 rounded-md outline-none border border-gray-500 focus:border-blue-100"
    />
  </div>
  )
}

export default InputImageFiled
