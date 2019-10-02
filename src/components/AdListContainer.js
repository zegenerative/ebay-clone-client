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
    />
  }
}

function mapStateToProps (state) {
  return { 
      advertisements: state.advertisements,
    }
}

const mapDispatchToProps = { getAdvertisements }

export default connect(mapStateToProps, mapDispatchToProps)(AdListContainer)