import { useEffect } from "react"
import { useGlobalContext } from "../../utils/context"

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import ListUserTab from "../ListUserTab/ListUserTab"
import ModalRepo from "../ModalRepo/ModalRepo"
import ModalFollower from "../ModalFollower/ModalFollower"
import ModalFollowing from "../ModalFollowing/ModalFollowing"

import "./styles.css"

const UserTab = () => {
  
  const { query,
    user, setUser } = useGlobalContext()
    
  useEffect(() => {
    fetch(`https://api.github.com/users/${query}`)
    .then(data =>  data.json())
    .then(data => setUser(data))
  }, [query])
    
  return (
    <>
      { user.id ? 
        (
          <Card sx={{ minWidth: 275, p: 2, display: "flex", flexDirection: "column", gap: 2, width: 1 }}>

            <CardContent sx={{ display: "flex", gap: 2, alignItems: "center", p: 0}}>
              <Avatar alt={user.login} src={user.avatar_url} sx={{ width: 84, height: 84 }}/>
              <CardContent sx={{display: "flex", flexDirection: "column", gap: .5, m: 0, p: 0, "&:last-child": {pb: 0}}}>
                <Typography sx={{ fontSize: 20, m: 0}} color="text.secondary" gutterBottom>
                  {user.login}
                </Typography>
                <Link href={user.html_url} underline="none" sx={{ fontSize: 18 }}>@{user.login}</Link>
                <Typography sx={{ fontSize: 12, m: 0 }} color="text.secondary" gutterBottom>
                  Last Update {user.updated_at?.slice(0,10)}
                </Typography>
              </CardContent>
            </CardContent>

            {
              user.bio &&   
              <Typography sx={{ fontSize: 16, m: 0, p: 0, pb: 0 }} color="text.secondary" gutterBottom>
                {user.bio }
              </Typography>
            }
              
            <CardContent sx={{m: 0, p: 0, "&:last-child": {pb: 0, display: "flex", justifyContent: "space-between", gap: 2 }}}>
              <CardContent sx={{m: 0, p: 0, "&:last-child": {p: 0, display: "flex", justifyContent: "space-between", gap: 2 }}}>
                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    REPOSITORY 
                  </Typography>
                  <ModalRepo />
                </Card>

                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    FOLLOWER 
                  </Typography>
                  <ModalFollower />
                </Card>

                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    FOLLOWING 
                  </Typography>
                  <ModalFollowing />
                </Card>
              </CardContent>
            </CardContent>
            <ListUserTab />
          </Card>
        )
        : 
        (
          <Stack spacing={1} sx={{display: "flex", flexDirection: "column", width: 1}}>
            {
              query === "" ? 
              <>
              <Typography sx={{fontWeight: 600, color: "#1976d2", textAlign: "center", fontSize: 20}}>Search a Octocat's friend!</Typography>
              <img src="https://octodex.github.com/images/codercat.jpg" alt="octocat" className="octocatIcon" />
              </>
              : 
              <>
              <Typography sx={{fontWeight: 600, color: "#1976d2", textAlign: "center", fontSize: 20, width: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 1}}>OPS! User Not Found...<br />Search another or Try again!</Typography>
              <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",  p: 0, gap: 2}}>
              <Skeleton variant="circular" width={120} height={80} />
                <Skeleton variant="rectangular" sx={{width: 1, height: 80}} />
              </CardContent>
              <Skeleton variant="rectangular" sx={{width: 1, height: 30}} />
              <Skeleton variant="rectangular" sx={{width: 1, height: 60}} />
              <Skeleton variant="rectangular" sx={{width: 1, height: 30}} />
              <Skeleton variant="rectangular" sx={{width: 1, height: 30}} />
              <Skeleton variant="rectangular" sx={{width: 1, height: 30}} />
              <Skeleton variant="rectangular" sx={{width: 1, height: 30}} />
              </>
            }

          </Stack>
        )
      }
    </>
  )
}

export default UserTab
