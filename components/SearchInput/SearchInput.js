import React, { useState } from "react";
import useSWR from "swr";

import {
  StyledSearchSection,
  SearchOption,
  SearchOptionList,
  OptionLink,
  Invitation,
  UserSearchIcon,
} from "./styles";
import { Input, InputContainer } from "../../page-styles/styles";

function SearchInput({ mode }) {
  const { data } = useSWR("/api/customers", { fallbackData: [] });
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
      <InputContainer>
        <Input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Kunden auswählen"
        />
      </InputContainer>
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
