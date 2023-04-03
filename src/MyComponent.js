import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
     //  letss list = [];
      this.state = {
        list: [1,2,3,4,5,6,7,8,9,10],
        selectedIndex: null,
      }
    }
    onSelected(item) {
      this.setState({ selectedIndex: item });
    }
    isSelected(item) {
      return this.state.selectedIndex === item;
    }
    render() {
      return (
        <div>
            <div>Seleted Item={this.state.selectedIndex}</div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
               BasicList
            </Typography>
              <div style={{ flex: '1 1 0px' }} />
            </Toolbar>
          </AppBar>
          {this.state.list.length < 1 &&
            this.getEmptyComponent()
          }
          <List className="list" component="nav">
            {
              this.state.list.map((item, i) => {
                return (
                  <ListItem key={'item_' + i} button className={this.isSelected(i) ? 'selected' : null} onClick={() => this.onSelected(i)}>
                    <ListItemText primary='item' ></ListItemText>
                    <ListItemText className="side" secondary={item}></ListItemText>
                  </ListItem>
                )
              })
            }
          </List>
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return { name: state.name };
  }
  
  const mapDispatchToProps = (dispatch) => ({
    loginRequest: (user_details) => dispatch(),
  
  });
 // export default connect(mapStateToProps,mapDispatchToProps)(MyComponent);

 export default connect( ( store ) => {
	return {
		posts: store
	}
}  )( MyComponent );