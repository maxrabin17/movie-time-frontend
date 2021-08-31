import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
}));
const Logout = ({ setUser, setWatchLater }) => {
    
    const classes = useStyles()
    const history = useHistory()
    useEffect(() => {
        let config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
        handleLogout()
    })

    const handleLogout = () => {
        setUser(null)
        setWatchLater([])
        setTimeout(() => {
            history.push('/login')
        }, 2000)
    }
    return (
        <div>
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Logout