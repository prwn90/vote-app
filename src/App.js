import React,{Component} from 'react';
import './App.css';


//Candidates 

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			candidates : [
				{name: "Barack Obama", votes: 0},
				{name: "Donald Trump", votes: 0},
				{name: "George W. Bush", votes: 0},
        {name: "Bill Clinton", votes: 0},
        {name: "Joe Biden", votes: 0},
        {name: "Hillary Clinton", votes: 0}
			]
		}
	}


  //Votes 
  
	vote (i) {
		let newCandidates = [...this.state.candidates];
		newCandidates[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({candidates: newCandidates});
		
	}

	render(){
		return(
			<>
				<h1>Choice Your President!</h1>
				<div className="candidates">
					{
						this.state.candidates.map((candidate, i) => 
							<div key={i} className="candidate">
								<div className="voteCount">
									{candidate.votes}
								</div>
								<div className="candidateName">
									{candidate.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Vote!</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;