import React, { Component } from 'react'
import ListService from '../services/ListService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }   
    }

    viewEmployee(id){
        this.props.history.push(`/view/${id}`);
    }

    componentDidMount(){
        ListService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
            console.log(res.status);
        });
    }

    render() {
        return (
            <div className='listContainer'>
               <ul className='listUl'>
               {
               this.state.employees.map(
                                        employee => 
                <li key={employee.userId}> 
                    <span className='listText'>{employee.userName}</span> 
                    <span className='listText'>{employee.departmentName}</span> 
                    <button class="button"onClick={ () => this.viewEmployee(employee.id)}> 
                    <span>Подробнее</span>
                    </button>
                </li>
                ) 
               }               
               </ul>
            </div>
        )
    }
}

export default ListComponent