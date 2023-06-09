import React, { Component } from 'react'


class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }   
    }

    viewEmployee(id){
        this.props.history.push(`api/users/${id}`);
    }

    render() {
        return (
            <div className='listContainer'>
               <ul className='listUl'>
               {
               this.state.employees.map(
                                        employee => 
                <li key={employee.id}> 
                    <span className='listText'>{employee.name}</span> 
                    <span className='listText'>{employee.dep}</span> 
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