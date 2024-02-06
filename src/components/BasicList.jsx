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
      monsters: []
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
    return (
      <div>
        <input type='search' placeholder='search' className='search-box'onChange={(event) => {
          const userString = event.target.value.toLocaleLowerCase();
          const filteredResponse = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(userString)
          }) 
          this.setState(() => {
            return {monsters: filteredResponse}
          })
        }}/>

        {this.state.monsters.map((monster) => {
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

export default BasicList;
