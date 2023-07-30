import React, { useState } from "react";
import useSWR from "swr";
import { TbUserSearch } from "react-icons/tb";

import {
  StyledSearchSection,
  StyledSearchInput,
  SearchOption,
  SearchOptionList,
  OptionLink,
  Invitation,
  UserSearchIcon,
} from "./styles";

function SearchInput({ mode }) {
  const { data } = useSWR("/api/customer", { fallbackData: [] });
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
            <OptionLink
              key={option._id}
              href={
                mode === "edit"
                  ? `/menu/edit-customer/${option._id}`
                  : `/customer/${option._id}`
              }
            >
              <SearchOption>{option.name}</SearchOption>
            </OptionLink>
          ))}
        </SearchOptionList>
      )}
      <UserSearchIcon />
      <Invitation>Bitte Kunden auswählen in der Suchleiste</Invitation>
    </StyledSearchSection>
  );
}

export default SearchInput;
