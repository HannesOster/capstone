import { useState } from "react";
import useSWR from "swr";
import { Input, InputContainer } from "../../page-styles/styles";
import {
  StyledSearchSection,
  SearchOption,
  SearchOptionList,
  OptionLink,
  Invitation,
  UserSearchIcon,
} from "./styles";
import { routes } from "../../utils/routes";

function SearchInput({ mode }) {
  const { data } = useSWR(routes.customersApiRoute, { fallbackData: [] });
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
                  ? routes.customerEditById(option._id)
                  : mode === "delete"
                  ? routes.customerDeletebyId(option._id)
                  : routes.customerById(option._id)
              }
            >
              <SearchOption>{option.name}</SearchOption>
            </OptionLink>
          ))}
        </SearchOptionList>
      )}
      <UserSearchIcon />
      <Invitation>
        {mode === "edit"
          ? "Bitte Kunden zum Bearbeiten in der Suchleiste auswählen"
          : "Bitte Kunden in der Suchleiste auswählen"}
      </Invitation>
    </StyledSearchSection>
  );
}

export default SearchInput;
