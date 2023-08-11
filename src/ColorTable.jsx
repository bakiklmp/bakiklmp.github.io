import React, { useState } from 'react';

function ColorTable() {
  const [inputText, setInputText] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000');
  const [tableCells, setTableCells] = useState([]);

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleAddCell = () => {
    const newCell = (
      <td key={tableCells.length} style={{ backgroundColor: selectedColor }}>
        {inputText}
      </td>
    );

    setTableCells([...tableCells, newCell]);
    setInputText('');
  };

  return (
    <div>
      <input type="text" placeholder='Metin Gir' value={inputText} onChange={handleTextChange} />
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={handleAddCell}>Ekle</button>

      <table>
        <tbody>
          <tr>
            {tableCells.map((cell) => cell)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ColorTable;
