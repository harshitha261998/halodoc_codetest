import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {withStyles, Tab} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TableComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            value:[],
            headers:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            this.setState({value:res.data})
        })
    }
    goBack=()=>{
        this.props.history.push(`/`);
    }
  
    render(){
        return(<div>
            table
            {/* <Link to="/">back</Link> */}
            <button onClick={this.goBack}>Back</button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.value.map((item,index)=>(
                        <TableRow key={item.id} >
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.username}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>)
    }
}
export default TableComponent;