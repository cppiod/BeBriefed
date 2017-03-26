import React, {Component, PropTypes} from 'react'
import{
	View,
	StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import StatusScreen from './StatusScreen'
import TabBarContainer from './TabBarContainer'

class MainContainer extends Component{
	_renderTab(selected, services){
		const thisService = services.find(s => s.key === selected)
		return(
			<StatusScreen
				isUp={thisService.isUp}
				lastUpTime={thisService.lastUpTime}
			/>
		)
	}

	render(){
		return(
			<LinearGradient colors={['#313d43','#4a787a']} style={styles.linearGradient}>
				{this._renderTab(this.props.selectedService, this.props.services)}
				
				<TabBarContainer 
					onTabChange={this.props.onServiceChange}
					selectedService={this.props.selectedService}
				/>
			</LinearGradient>
		)
	}
}

MainContainer.propTypes = {
	selectedService: PropTypes.string.isRequired,
	services: PropTypes.array.isRequired,
	onServiceChange: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
	    paddingRight: 15,
	    borderRadius: 5
	},
})

export default MainContainer