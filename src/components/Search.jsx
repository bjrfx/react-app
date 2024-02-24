import { AppBar, Toolbar, Typography, InputBase, Switch, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchField: ''
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    return (
      <div sx={{ display: { xs: 'none', sm: 'block' } }}>
        <div sx={{ position: 'relative', borderRadius: 1, backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15), '&:hover': { backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25) }, marginLeft: 2, marginRight: 2, width: 'auto', }}>
          <div sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
            <div sx={{ pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 1, marginRight: 1 }}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              sx={{ color: 'inherit', width: '100%' }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.handleSearchChange}
              value={this.state.searchField}
            />
          </div>
          {console.log(this.state.searchField)}
        </div>
      </div>
    );
  }
}

export default Search;
