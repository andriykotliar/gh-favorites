import { ChangeEvent, FC } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string | null;
};

const SearchBar: FC<SearchBarProps> = ({
  onChange,
  defaultValue
}) => {
  return (
    <TextField
      placeholder="Type repository name"
      onChange={onChange}
      onFocus={(e) => e.target.select()}
      defaultValue={defaultValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      sx={{
        width: '100%',
        background: '#fff'
      }}
    />
  );
};

export { SearchBar };