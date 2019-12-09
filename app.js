var names = ["Milk", "Cookies", "Choclate"]
class GroceryList extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {



		return (
		<ul>
	 		 {this.props.names.map((name) => (<GroceryListItem name={name} />))}
		</ul>)
	}
}



class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}
	onListItemHover() {
		console.log("here")
		this.setState({
		  done: !this.state.done
		});
	}
	render() {

		// console.log(this)

		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};
		
	  return (<li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.name}</li>)}

	
	}







// When a list item is clicked, we will toggle the `done`
// boolean, and our component's `render` method will run again


  


  ReactDOM.render(<GroceryList names={names}/>, document.getElementById("app"));