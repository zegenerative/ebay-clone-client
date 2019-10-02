import React from 'react'
import { connect } from 'react-redux'
import { createAdvertisement } from '../actions/advertisements'
import AdCreateForm from './AdCreateForm'

class AdCreateFormContainer extends React.Component {
  state = {
    title: '',
    description: '',
    url: '',
    price: 0,
    email: '',
    phone: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createAdvertisement(this.state)
    this.setState({
        title: '',
        description: '',
        url: '',
        price: 0,
        email: '',
        phone: '',
      })
  }

  render() {
    return (<div>
        <AdCreateForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
         />
    </div>
    )
  }
}

export default connect(null, { createAdvertisement })(AdCreateFormContainer)