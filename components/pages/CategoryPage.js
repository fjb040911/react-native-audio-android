const React = require('react-native')

const {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	ToastAndroid,
	Platform,
} = React

const CategoryPage = React.createClass({
	_onPressCategoryItem(e) {
		let route = e
		route.id = 'phrase'
		this.props.navigator.push(route)
	},
	render(){
		return(
			<View style={styles.container}>
				<View style={{marginTop: 50,}}>
					<Text style={styles.h1}>What would you</Text>
					<Text style={styles.h1}>like to do today?</Text>
				</View>
				<View style={styles.categoryContainer}>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'city', categoryFull: 'Visit the city', categoryColor: styles.city} )}>
						<View style={[styles.categoryItem, styles.city]}>
							<Text style={styles.white}>Visit the city</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'food', categoryFull: 'Eat delicious food', categoryColor: styles.food})}>
						<View style={[styles.categoryItem, styles.food]}>
							<Text style={styles.white}>Eat delicious food</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'nature', categoryFull: 'Explore nature', categoryColor: styles.nature})}>
						<View style={[styles.categoryItem, styles.nature]}>
							<Text style={styles.white}>Explore nature</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'market', categoryFull: 'Go to the market', categoryColor: styles.market})}>
						<View style={[styles.categoryItem, styles.market]}>
							<Text style={styles.white}>Go to the market</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'landmark', categoryFull: 'Visit landmarks', categoryColor: styles.landmark})}>
						<View style={[styles.categoryItem, styles.landmark]}>
							<Text style={styles.white}>Visit landmarks</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='clear' 
						onPress={this._onPressCategoryItem.bind(this, {category: 'celebrate', categoryFull: 'Celebrate', categoryColor: styles.celebrate})}>
						<View style={[styles.categoryItem, styles.celebrate]}>
							<Text style={styles.white}>Celebrate</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#E7F6F8',
	},
	categoryContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 8,
		width: 300,
	},
	h1: {
		color: '#34485E',
		fontSize: 23,
	},
	categoryItem: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 130,
		height: 130,
		margin: 10,
		color: 'white',
		borderRadius: 4,
	},
	city: {
		backgroundColor: '#59A3EE',
	},
	food: {
		backgroundColor: '#F18F68',
	},
	nature: {
		backgroundColor: '#5DD28B',
	},
	market: {
		backgroundColor: '#FEBD42',
	},
	landmark: {
		backgroundColor: '#8E9BA6',
	},
	celebrate: {
		backgroundColor: '#35495E',
	},
	white: {
		color: 'white',
	}
})

module.exports = CategoryPage
