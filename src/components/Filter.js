import React from "react";
import css from "./Filter.module.css";

export const Filter =({inputValue, InputOnChange}) => {
  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        value={inputValue}
        onChange={InputOnChange}
        />
      </label>
    </div>
  )
}
