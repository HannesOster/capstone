import React, { useState } from "react";
import data from "../../lib/dummyArray";
import Link from "next/link";
import {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
  OptionLink,
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
            <SearchOption key={option.id}>
              <OptionLink href={`/${option.id}`}>{option.name}</OptionLink>
            </SearchOption>
          ))}
        </SearchOptionList>
      )}
    </StyledSearchSection>
  );
}

export default SearchInput;
