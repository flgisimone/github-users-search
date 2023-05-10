import { useEffect} from "react"
import { useGlobalContext } from "../../utils/context"

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import ListuUserTab from "../ListUserTab/ListUserTab"

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
      {
        user ? 
        (
          <Card sx={{ minWidth: 275, p: 2, display: "flex", flexDirection: "column", gap: 2 }}>

            <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", p: 0}}>
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

            <Typography sx={{ fontSize: 16, m: 0, p: 0, pb: 0 }} color="text.secondary" gutterBottom>
                {user.bio === null ? "Unkown Bio" : user.bio }
            </Typography>

            <CardContent sx={{m: 0, p: 0, "&:last-child": {pb: 0, display: "flex", justifyContent: "space-between", gap: 2 }}}>
              <CardContent sx={{m: 0, p: 0, "&:last-child": {pb: 0, display: "flex", justifyContent: "space-between", gap: 2 }}}>
                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    REPOSITORY 
                  </Typography>
                  <Typography sx={{ fontSize: 18, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    {user.public_repos}
                  </Typography>
                </Card>

                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    FOLLOWER 
                  </Typography>
                  <Typography sx={{ fontSize: 18, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    {user.followers}
                  </Typography>
                </Card>

                <Card sx={{p: 1, display: "flex", flexDirection: "column", gap: .5}}>
                  <Typography sx={{ fontSize: 12, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    FOLLOWING 
                  </Typography>
                  <Typography sx={{ fontSize: 18, m: 0, textAlign: "center" }} color="text.secondary" gutterBottom>
                    {user.following}
                  </Typography>
                </Card>
              </CardContent>
            </CardContent>

            <ListuUserTab />

          </Card>
        ) : (
          <Stack spacing={1} sx={{width: 1}}>
            <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",  p: 0, gap: 2}}>
            <Skeleton variant="circular" width={100} height={100} />
              <Skeleton variant="rectangular" sx={{width: 1/2, height: 80}} />
            </CardContent>
            <Skeleton variant="rectangular" sx={{width: 1, height: 40}} />
            <Skeleton variant="rectangular" sx={{width: 1, height: 40}} />
          </Stack>
        )
      }
      </>
  )
}

export default UserTab
