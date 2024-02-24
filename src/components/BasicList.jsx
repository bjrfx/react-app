import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Component } from 'react';

class BasicList extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  render() {
    const filteredResponse = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    return (
      <div>
        {/* SearchBar */}
        <input type='search' placeholder='search' className='search-box'onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          
          this.setState(() => {
            return {searchField}
          }, () => { //remove this functin - only for testing purpose
            this.setState(prevState => {
              const newObject = { id: 10, name: 'Kiran Bandarupalli', username: 'bjrfx' };
              return { monsters: [...prevState.monsters, newObject] };
            });
          })
          
          
        }}/>

        {/* Adding data to Lists */}
        {filteredResponse.map((monster) => {
          return <div key={monster.id}>
            <Box sx={{ marginLeft: 10, marginTop: 5, width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem key={monster.id}>
                  <ListItemText  primary={monster.name} />
              </ListItem>
            </List>
          </nav>
        </Box>
          </div>
        })}
      </div>
    )
  }
}

function SearchBarTwo() {
  return <div>
    <input type='search' placeholder='search' className='search-box'onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          
          this.setState(() => {
            return {searchField}
          })
        }}/>
  </div>
}

export {BasicList, SearchBarTwo};
