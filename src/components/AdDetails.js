import React from 'react'

export default function AdDetails(props) {
    console.log()
    const { title, description, url, price, email, phone, deleteEvent } = props.advertisement
    console.log(title, description, url, price)
    return (
        <div>
            <h2>{ title }</h2>
            { props.advertisement === null && 'Loading...'}
            <img className='advertisement-image' src={ url } width='30%' alt='...'></img>
            <h1>{ description }</h1>
            <i>Price: { price }</i>
            <p>Email: { email }</p>
            <p>Phone number:{ phone }</p>
            {/* <button onClick={deleteEvent}>Delete</button> */}
        </div>
    )
}