import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


export default function NotFound () {
    return (
        <div>
            <h1>Not Found</h1>
            <Button
              variant="text"
              component={Link}
              to='/'
              >
                Back to Home
            </Button>
        </div>
    )
}
