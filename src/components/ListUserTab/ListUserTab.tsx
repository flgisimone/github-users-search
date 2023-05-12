import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';

import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TwitterIcon from '@mui/icons-material/Twitter';

import { useGlobalContext } from "../../utils/context"

import "./styles.css"

const ListUserTab = () => {

  const { user } = useGlobalContext()

  if(
    !user.company && 
    !user.blog && 
    !user.location && 
    !user.email
    ) return <Typography sx={{ fontSize: 16, m: 0, textAlign: "center"}} color="text.secondary" gutterBottom> NO OTHER DATA </Typography>

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: "flex", flexDirection: "column", p: 0, m: 0}}>

      {
        user.company && 
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <BusinessIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={user.company} secondary="Company" />
        </ListItem>
      }

      {
        user.blog &&
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <LinkIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={<Link href={user.blog} sx={{textDecoration: "none"}}>{user.blog}</Link>} secondary="Site/Blog" />
        </ListItem>
      }

      {
        user.location &&
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <LocationOnIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={user.location} secondary="Location" />
        </ListItem>
      }

      {
        user.email &&
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <EmailIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={user.email} secondary="Email" />
        </ListItem>
      }

      {
        user.twitter_username &&
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <TwitterIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={"@" + user.twitter_username} secondary="Twitter" />
        </ListItem>
      }

      {
        user.hireable &&
        <ListItem sx={{display: "flex", alignItems: "center", gap: 2, m: 0, p: 0}}>
          <WorkHistoryIcon sx={{fontSize: 30, color: "#1976d2"}}/>
          <ListItemText primary={user.hireable} secondary="Hireable" />
        </ListItem>
      }

  </List>
  )
}

export default ListUserTab