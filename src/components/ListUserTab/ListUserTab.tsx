import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import { useGlobalContext } from "../../utils/context"

import "./styles.css"

const ListUserTab = () => {

  const { user } = useGlobalContext()

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: "flex", flexDirection: "column", p: 0, m: 0}}>
    <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
      <BusinessIcon sx={{fontSize: 30, color: "#1976d2"}}/>
      <ListItemText primary={user.company === null ? "Unkown" : user.company} secondary="Company" />
    </ListItem>
    <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
      <LinkIcon sx={{fontSize: 30, color: "#1976d2"}}/>
      <ListItemText primary={user.blog === null ? "Unkown" : user.blog} secondary="Site/Blog" />
    </ListItem>
    <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
      <LocationOnIcon sx={{fontSize: 30, color: "#1976d2"}}/>
      <ListItemText primary={user.location === null ? "Unkown" : user.location} secondary="Location" />
    </ListItem>
    <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
      <EmailIcon sx={{fontSize: 30, color: "#1976d2"}}/>
      <ListItemText primary={user.email === null ? "Unkown" : user.email} secondary="Email" />
    </ListItem>
  </List>
  )
}

export default ListUserTab