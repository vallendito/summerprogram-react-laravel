import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post('/api/users', this.state).then(response=>{
            console.log(response);
        }).then(error => {
            console.log(error);
        }) 
    }

    render() {
        return(
            <div>
                <h2>Add New User</h2>
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default" type="submit ">Save</button>
                    </div>
                </div>

                </form>
            </div>
        )
    }
}

if(document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}



