import React from "react";
import FilterLink from "../containers/FilterLink";
import { visibilityFilters } from "../actions";

export default function Footer() {
  return (
    <div>
      <label>Show: </label>
      <FilterLink filter={visibilityFilters.SHOW_ALL}>ALL</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
        Complete
      </FilterLink>
    </div>
  );
}
