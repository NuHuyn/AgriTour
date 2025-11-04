
import React, { useContext } from 'react';
import { StoreContext } from '../../context-store/StoreContext';
import './RegionSelector.css';
import { assets } from '../../assets/assets';
const RegionSelector = () => {
  const { region, setRegion } = useContext(StoreContext);

  const handleSelect = (value) => {
    if (region === value) {
      setRegion("All");     // ✅ click lần 2 → đóng
    } else {
      setRegion(value);     // ✅ click lần 1 → mở
    }
  };

  return (

  <div className="region-field">
    <div className="region-buttons">
      <button
        className={region === 'North' ? 'active' : ''}
        onClick={() => handleSelect('North')}
      >
        North
      </button>

      <button
        className={region === 'Central' ? 'active' : ''}
        onClick={() => handleSelect('Central')}
      >
        Central
      </button>

      <button
        className={region === 'South' ? 'active' : ''}
        onClick={() => handleSelect('South')}
      >
        South
      </button>
    </div>
  </div>
  );
};

export default RegionSelector;
