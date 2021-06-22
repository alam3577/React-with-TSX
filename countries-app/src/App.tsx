import { Component } from "react";
import { connect } from "react-redux";
import getCountries from "./action/CountriesActions";

interface IState {
  country: any;
  border: any;
  sajjad: any;
  
}

interface IProps {
  my_fun: any;
  res: any;
  
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      country: "Select Countries",
      border: 0,
      sajjad: 0,
    };
  }
  componentDidMount() {
    this.props.my_fun();
  }
  handleClick = (id: any) => {
    console.log(id);
  };
  render() {
    const { loading, error, countries } = this.props.res;
    return (
     <>
       <h1>Hello this is App screen</h1>
       <h2>Experiment
       {
         countries.map((elem:any,index:any)=>(
           <>
              {/* <h4>{elem.borders[0]}</h4> */}
           </>
         ))
       }

       </h2>
       <h3>This is ...{this.state.country}......country........{this.state.border}</h3>
       <select value={this.state.country} onChange={(e:any)=>{this.setState({country:e.target.value})}} >
            {
              countries.map((elem:any,index:any)=>(
                <>
                   <h3>Please select countries</h3>
                   <option key={index} value={elem.name}>{elem.name}</option>
                </>
              ))
            }
       </select>
       <select value={this.state.border} onChange={(e:any)=>{this.setState({border:e.target.value})}}>
              {
                countries.map((elem:any, index:any)=>(
                  <>
                     {
                       elem.name === this.state.country?(
                         <>
                            {
                              elem.borders.map((elem:any,index:any)=>(
                                 <option value={elem}>{elem}</option>
                                  
                              ))
                            }
                         </>
                       ):null
                     }
                  </>
                ))
              }
       </select>
     </> 
    )
  }
}

// subscription

const recive = (state: any) => {
  console.log("THIS IS SUBSCRIPTION", state);
  return {
    res: state,
  };
};

// dispatch

const send = (dispatch: any) => {
  console.log("THIS IS DISPATCH ", dispatch);
  return {
    my_fun: () => {
      dispatch(getCountries());
    },
  };
};

export default connect(recive, send)(App);
