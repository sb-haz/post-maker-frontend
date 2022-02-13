import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="content not-found">
        <h1>Looks like you're lost.</h1>
        <p>We can't find the page you're looking for :(</p>
        <Link className="simple-btn" to="/">Back to Home</Link>
    </div>
  )
}

export default NotFound