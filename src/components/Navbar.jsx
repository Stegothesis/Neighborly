import React from 'react';
import { Link } from 'react-router';
import { Menu, Segment } from 'semantic-ui-react';

export const Navbar = ({location}) => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item className="logo"></Menu.Item>
        <Menu.Item as={Link} to='/' name='About' active={location === '/landing'} />
        <Menu.Item as={Link} to='/neighborhood' name='Neighborhood' active={location === '/neighborhood'} />
        <Menu.Menu position='right'>
          <Link to='/signup' className='item'>
            Sign Up
          </Link>
          <Menu.Item as={Link} to='/login' name='login'>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
};
