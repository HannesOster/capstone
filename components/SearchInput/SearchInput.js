import React, { useState } from "react";
import useSWR from "swr";

import {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
  OptionLink,
} from "./styles";

function SearchInput({ mode }) {
  const { data } = useSWR("/api", { fallbackData: [] });
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
        placeholder="Kunden auswählen"
      />
      {searchValue.trim() !== "" && (
        <SearchOptionList>
          {filteredOptions.map((option) => (
            <SearchOption key={option._id}>
              <OptionLink
                href={
                  mode === "edit"
                    ? `/menu/edit-customer/${option._id}`
                    : `/customer/${option._id}`
                }
              >
                {option.name}
              </OptionLink>
            </SearchOption>
          ))}
        </SearchOptionList>
      )}
    </StyledSearchSection>
  );
}

export default SearchInput;
