import React from 'react';
import './side-nav.scss'
import {Link,Redirect,NavLink} from 'react-router-dom';

export default class Sidenav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      "data" : [],
      redirect: false
    }
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.setNavData()
  }

  componentWillMount(){
    if(localStorage.getItem("X-Auth-Token")){
      console.log()
    }
    else{
    this.setState({redirect: true});
  }
  }

  logout(){
    localStorage.setItem("X-Auth-Token",'');
    localStorage.clear();
    this.setState({redirect: true});
  }


  setNavData = () => {

    this.setState({
      data : [

        {
            label: 'Dashboard',
            route: '/dashboard',
        },
      {
          label: 'signup',
          route: '/signup',
      },  
      {
        label: 'ListView',
        route: '/contract-table',
    },
       
      ]
    })
    
  }
  
  render() {   
      if(this.state.redirect)
    {
      return (<Redirect to={'/'} />)
    }  

    return (  
        <div className="side-nav">
        <nav className="nav">
  
          <div className="nav_item ">
          <ul className="nav-pills">
        {
          this.state.data.map(function(movie){
          return<NavLink to={movie.route} activeClassName="selected"> <li> {movie.label}</li></NavLink>;
          })
        }
        <li className="logoutButton" onClick={()=>this.logout()}>Logout</li>
        </ul>
          </div>
      </nav>
      </div>
    );
  }
}