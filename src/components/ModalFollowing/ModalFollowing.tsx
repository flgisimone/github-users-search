import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography'
import GradingIcon from '@mui/icons-material/Grading';
import Avatar from '@mui/material/Avatar';

import { useGlobalContext } from "../../utils/context";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: 2
  };

const ModalFollower = () => {

    interface IRepository{
        html_url: string,
        name: string,
    }

    const{ user, query } = useGlobalContext()

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [following, setFollowing] = useState<any[]>([])
    const [page, setPage] = useState(1)

    const token = "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"

    const itemsPerPage = 10
    const numPages = Math.ceil(following.length / itemsPerPage)

    useEffect(() => {
        fetch(`https://api.github.com/users/${query}/following{other_user}`.replace('{other_user}', ''), {
            headers: {
              'Authorization': `token ${token}`
            }
          })
        .then(res => res.json())
        .then(res => setFollowing(res))
    }, [query])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };      
    
  return (
    <>
        <Button onClick={handleOpen} sx={{m: 0, p: 0, fontSize: 18}}>
            {user.following}
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{textAlign: "center", fontSize: 18}}>FOLLOWING</Typography>
                <List sx={{m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1}}>
                    {
                        following.length &&
                        following?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map(follow => 
                        <ListItem sx={{m: 0, p: 0, display: "flex", gap: 1}} key={follow.id}>
                            <Avatar src={follow.avatar_url} alt={follow.login} />
                            <Link href={follow.html_url} underline="none" sx={{ fontSize: 18 }} title={follow.login}>{follow.login?.length < 25 ? (follow.login) : (follow.login?.slice(0,25) + "...")}</Link>
                        </ListItem>)
                    }
                </List>
                <Pagination 
                count={numPages} 
                showFirstButton 
                showLastButton 
                sx={{fontSize: 1}} 
                onChange={handlePageChange}/>
            </Box>
        </Modal>
    </>
  )
}

export default ModalFollower