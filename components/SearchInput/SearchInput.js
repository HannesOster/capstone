import React, { useState } from "react";
import data from "../../lib/dummyArray";
import {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
} from "./styles";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  const filteredOptions = data.filter(
    (option) =>
      searchValue.trim() === "" ||
      option.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <StyledSearchSection>
      <StyledSearchInput
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Suche"
      />
      {searchValue.trim() !== "" && (
        <SearchOptionList>
          {filteredOptions.map((option) => (
            <SearchOption key={option.id}>{option.name}</SearchOption>
          ))}
        </SearchOptionList>
      )}
    </StyledSearchSection>
  );
}

export default SearchInput;
