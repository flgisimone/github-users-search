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

const ModalRepo = () => {

    interface IRepository{
        html_url: string,
        name: string,
        length: number,
        avatar_url: string,
        login: string,
        id: number,
        slice: Function,
    }

    const{ user, query } = useGlobalContext()

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [repos, setRepos] = useState<IRepository | []>([])
    const [page, setPage] = useState(1)

    const itemsPerPage = 10
    const numPages = Math.ceil(repos.length / itemsPerPage)

    useEffect(() => {
        fetch(`https://api.github.com/users/${query}/repos`)
        .then(res => res.json())
        .then(res => setRepos(res))
    }, [query])

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        e.preventDefault()
        setPage(value);
      };      
    
  return (
    <>
        <Button onClick={handleOpen} sx={{m: 0, p: 0, fontSize: 18}}>
            {user.public_repos}
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{textAlign: "center", fontSize: 18}}>REPOSITORY</Typography>
                <List sx={{m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1}}>
                    {
                        repos.length &&
                        repos.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map((repo: IRepository) => 
                        <ListItem sx={{m: 0, p: 0, display: "flex", gap: 1}} key={repo.id}>
                            <GradingIcon />
                            <Link href={repo.html_url} underline="none" sx={{ fontSize: 18 }} title={repo.name}>{repo.name?.length < 25 ? (repo.name) : (repo.name?.slice(0,25) + "...")}</Link>
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

export default ModalRepo