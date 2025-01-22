import React, { useState } from "react";
import TableRow from "./TableRow";
import "./../styles/Table.css";

const Table = () => {
  const singleSelectOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [rows, setRows] = useState([
    { id: 1, singleSelectValue: "", multiSelectValues: [] },
  ]);
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ]);

  const addNewRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, singleSelectValue: "", multiSelectValues: [] },
    ]);
  };

  const updateRow = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              singleSelectOptions={singleSelectOptions.filter(
                (opt) =>
                  !rows.some(
                    (r) => r.singleSelectValue === opt && r.id !== row.id
                  )
              )}
              multiSelectOptions={multiSelectOptions}
              updateRow={updateRow}
              setMultiSelectOptions={setMultiSelectOptions}
            />
          ))}
        </tbody>
      </table>
      <button className="add-row-button" onClick={addNewRow}>
        + Add New Row
      </button>
    </div>
  );
};

export default Table;
