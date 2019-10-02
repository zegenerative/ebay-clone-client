import React from 'react'
import { getAdvertisements } from '../actions/advertisements'
import { connect } from 'react-redux'
import AdList from './AdList'

class AdListContainer extends React.Component {
  componentDidMount() {
    this.props.getAdvertisements()
  }

  render() {
    return <AdList 
    advertisements={this.props.advertisements} 
    user={this.props.user}
    />
  }
}

function mapStateToProps (state) {
  return { 
      advertisements: state.advertisements,
      user: state.user
    }
}

const mapDispatchToProps = { getAdvertisements }

export default connect(mapStateToProps, mapDispatchToProps)(AdListContainer)