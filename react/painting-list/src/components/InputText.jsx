export default function InputText({ msn, onChange, value }) {
  return (
    <input 
      placeholder={msn} 
      onChange={onChange} 
      value={value} 
    />
  );
}