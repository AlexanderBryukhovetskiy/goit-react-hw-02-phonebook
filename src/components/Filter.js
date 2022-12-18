import React from "react";
import css from "./Filter.module.css";

export const Filter =( { valueFilter, onChangeFilter } ) => {
  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        onChange={onChangeFilter}
        value={valueFilter}
        />
      </label>
    </div>
  )
}
