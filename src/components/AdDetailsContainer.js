import React from 'react'
import { connect } from 'react-redux'
import AdDetails from './AdDetails'
import { getAdvertisement } from '../actions/advertisements'
// import { updateAdvertisement, deleteAdvertisement } from '../actions/advertisements'

class AdDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.getAdvertisement(this.props.match.params.id)
  }

  deleteAdvertisement = () => {
    console.log('button clicked')
  }

  render() {  
    console.log(this.props.advertisement)
    return <AdDetails 
    advertisement={this.props.advertisement} 
    // getAdvertisement={this.props.getAdvertisement}
    // updateAdvertisement={this.props.updateAdvertisement}
    // deleteAdvertisement={this.props.deleteAdvertisement}
    />
  }
}

const mapStateToProps = state => ({
  advertisement: state.advertisement
})

const mapDispatchToProps = { getAdvertisement }
// { updateAdvertisement, deleteAdvertisement }

export default connect(mapStateToProps, mapDispatchToProps)(AdDetailsContainer)