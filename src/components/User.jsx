import React from "react"

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/nandhuknair');
        const json = await data.json()
        this.setState({
            userInfo:json
        })
    }

    render(){

        const {name,location} = this.state.userInfo ;

        return(
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location :{ location}</h3>
                <h4>Contact : @nandhu27</h4>
            </div>
        )
    }
}

export default User