import './index.css';

export default function Switch({ onChange }) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
}
