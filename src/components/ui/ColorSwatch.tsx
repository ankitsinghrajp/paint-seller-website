import React from "react";

interface ColorSwatchProps {
  color: { name: string; hex: string };
  selected?: boolean;
  onSelect?: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, selected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={color.name}
      title={color.name}
      className={`h-9 w-9 rounded-md border flex items-center justify-center hover-scale ${selected ? "ring-2 ring-ring" : ""}`}
      style={{ backgroundColor: color.hex }}
    >
      {selected && (
        <span className="sr-only">Selected</span>
      )}
    </button>
  );
};

export default ColorSwatch;
