import React from 'react'
// import AdCreateFormContainer from './AdCreateFormContainer'
import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'

export default class AdList extends React.Component {
    
    render() {
        const { advertisements, user } = this.props
        console.log(this.props)
        if(user) {
            return(
                <div>
                    <h1>Welcome to IBay!</h1>
                    <Link to='/sell'><button><h3>SELL</h3></button></Link>
                    { advertisements === null && 'Loading...' }
                    { advertisements.map((advertisement => {
                        return( 
                        <div key={ advertisement.id }>
                            <h3>{ advertisement.title }</h3>
                            <p>Price: { advertisement.price }€</p>
                            <Link to={`/advertisement/${advertisement.id}`}>
                                <img  
                                    className='advertisement' 
                                    src={ advertisement.url } 
                                    alt='...' 
                                    width='30%'>
                                </img>
                            </Link>
                        </div>)
                        })) 
                    }
                {/* <AdCreateFormContainer /> */}
                </div>
            )
        } else {
            return(
                <LoginFormContainer />
            )
        }
    }
}
