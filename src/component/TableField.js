import React from "react";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
const TableField = ({ fieldName, fieldSetting, editBook, removeBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {fieldSetting && (
        <div className="settings">
          <BiEdit onClick={editBook} />
          <FaTrash onClick={removeBook} />
        </div>
      )}
    </div>
  );
};

export default TableField;
