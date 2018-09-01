const {HashRouter, Link, Route, Switch} = require('react-router-dom')
const PropTypes = require('prop-types')
const React = require('react')

const Dashboard = require('./page/Dashboard')
const Login = require('./page/Login')
const Register = require('./page/Register')

const App = (props) => {
    return (
        <HashRouter>
            <div className='wrapper'>
                <h1>Vertex</h1>
                <div className='menu'>
                    <Link to='/'>Login</Link><br />
                    <Link to='/register'>Register</Link><br />
                    <Link to='/dashboard'>Dashboard</Link><br />
                </div>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </HashRouter>
    )
}

App.defaultProps = {}

App.propTypes = {}

module.exports = App