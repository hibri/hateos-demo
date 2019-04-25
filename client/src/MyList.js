import React, { Component } from 'react';

class MyList extends Component {



	constructor(props) {
		super(props)
		this.state = {
			resource: null
		}
	}
	render() {
		if (this.state.resource) {
			console.log(this.state.resource);

			return <div>
				{this.renderData(this.state.resource._embedded)}
				{this.renderLinks(this.state.resource._links)}
			</div>
		}
		return <div></div>;
	}

	renderData(embedded) {
		let buffer =[]
		if (embedded) {
			console.log(embedded);
			embedded.forEach(emb => {
				buffer.push(<li key={emb.name}><p>{emb.title} : {emb.value}</p> {this.renderLinks(emb._links)} </li>)
			});
			return <ul>{buffer}</ul>
		}
		return <div></div>
	}
	renderLinks(links) {
		if (links) {
			let buffer = [];
			links.forEach(link => {
				buffer.push(<li key={link.rel}><a href="#" onClick={(e) => { this.navigate(link, e) }}>{link.title}</a></li>)
			});
			return <ul>{buffer}</ul>;
		}
		return ""
	}

	navigate(link, event) {
		event.preventDefault();
		console.log(link);
		this.fetchData(link.href)
	}


	componentDidMount() {
		this.fetchData("http://localhost:8080/");
	}

	fetchData(href) {
		fetch(href)
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				this.setState({ resource: result });
			}, (error) => {
			});
	}
}


export default MyList