import React from 'react'

export default function AdCreateFrom(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <h3>Create an Ad</h3>
                <form onSubmit={onSubmit}> 
                    <label>Title:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.title}
                            name='title'
                            placeholder='title'
                        />
                    </label>
                    <label>Description:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.description}
                            name='description'
                            placeholder='description'
                        />
                    </label>
                    <label>Picture:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.url}
                            name='url'
                            placeholder='url'
                        />
                    </label>
                    <label>Price:
                        <input 
                            type="number" 
                            onChange={onChange}
                            value={values.price}
                            name='price'
                            min='1'
                            max='10000000'
                            placeholder='price in EUR'
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="email" 
                            onChange={onChange}
                            value={values.email}
                            name='email'
                            placeholder='email'
                        />
                    </label>
                    <label>Phone:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.phone}
                            name='phone'
                            placeholder='13-digit-number'
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
    )
}