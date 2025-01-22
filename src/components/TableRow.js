import React from "react";
import DropdownSingleSelect from "./DropdownSingleSelect";
import DropdownMultiSelect from "./DropdownMultiSelect";

const TableRow = ({
  row,
  singleSelectOptions,
  multiSelectOptions,
  updateRow,
  setMultiSelectOptions,
}) => {
  return (
    <tr>
      <td>
        <DropdownSingleSelect
          options={singleSelectOptions}
          value={row.singleSelectValue}
          onChange={(value) => updateRow(row.id, "singleSelectValue", value)}
        />
      </td>
      <td>
        <DropdownMultiSelect
          options={multiSelectOptions}
          selectedValues={row.multiSelectValues}
          onChange={(values) => updateRow(row.id, "multiSelectValues", values)}
          addNewOption={(newOption) =>
            setMultiSelectOptions([...multiSelectOptions, newOption])
          }
        />
      </td>
    </tr>
  );
};

export default TableRow;
