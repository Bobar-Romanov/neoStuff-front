import React, { Component } from 'react'
import ListService from "../services/ListService"
import withRouter from './withRouter';


class ViewComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCommentOpen: false,
            commentText: '',
            isEditopen: false,
            EditedDate: '',
            selectedType: '',
            selectedPeriodicity: '',
            addDate: '',
          };

        this.state = {
            id: this.props.params.id,
            types:{},
            employee: {},
        }
        
    }

    componentDidMount(){
        ListService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
         
    handleCommentClick = () => {
        this.setState({ isCommentOpen: true });
    };       
    handleEditCommClick = () => {
        // Обработчик для кнопки "Изменить"
        // Добавьте здесь логику для сохранения изменений комментария
        this.setState({ isCommentOpen: false });
    };       
    handleCommentChange = (event) => {
        this.setState({ commentText: event.target.value });
    }; 
    handleCloseCommClick = () => {
        this.setState({ isCommentOpen: false });
        this.setState({ commentText: '' });
    };


    handleEditClick = () => {
        this.setState({ isEditopen: true});
    }; 
    handeNewDate = (event) => {
        this.setState({EditedDate:event.target.value});
    }
    handleSaveEdit = () => {
        // Здесь можно выполнить логику сохранения изменений
        this.setState({isEditopen: false});
    };
    handleCloseEditClick = () => {
        this.setState({EditedDate: ''});
        this.setState({isEditopen: false});
    };  

    
   

    handleAddDateChange = (event) => {
        this.setState({ addDate: event.target.value});
    };

    handleTypeChange = (event) => {
        this.setState({selectedType: event.target.value });
        /*if (event.target.value === 'Тип 1') {
            this.setState({selectedPeriodicity: selectedType.interval});
          } */
    };
    handleAddActivClick = () => {
        
        // Обработчик для кнопки "Добавить"
        // Можете добавить здесь логику для обработки добавления данных формы
        this.setState({selectedType: ''});
        this.setState({selectedType: ''});
        this.setState({addDate: ''});
      }; 
      
      

    render() {
        return (
            <div className="viewContainer">
                <div className="left-div">
                    <ul className='viewUl'>
                        <li>
                            <span className ="date">Дата</span>
                            <span className ="title">Название</span>
                            <div>
                                <button className ="buttons" onClick={this.handleCommentClick}>Комментарий</button>
                                <button className ="buttons" onClick={this.handleEditClick}>Изменить</button>
                                <button className ="buttons">Удалить</button>
                             </div>
                {this.state.isCommentOpen && (
              <div className="comment-box">
                <textarea
                  className="comment-textarea"
                  placeholder="Введите комментарий"
                  value={this.state.commentText}
                  onChange={this.handleCommentChange}
                ></textarea>
                <div className="comment-actions">
                  <button className="buttons" onClick={this.handleEditCommClick}>
                    Изменить
                  </button>
                  <button className="buttons" onClick={this.handleCloseCommClick}>
                    Закрыть
                  </button>
                </div>
              </div>
            )}
            {this.state.isEditopen && (
              <div className="edit-window">
              <input
                type="date"
                value={"data"}
                onChange={this.handleNewDate} />
              
              <button onClick={this.handleSaveEdit} className="buttons">Сохранить</button>
              <button onClick={this.handleCloseEditClick} className="buttons">Закрыть</button>
            </div>
            )}

                        </li>
                     </ul>
                </div>
                <div className="right-div">
                <div class="left-column">
                     <div class="info">
                     <h1>Имя: Name</h1>
                        <p>Дата устройства: 26.04.2020</p>
                        <p>Отдел: Otdel 1</p>
                        <p>Грейд: Мидл</p>
                     </div>
                     <div class="add-activity"> 
                     <p className='text1'>Добавить мероприятие</p>                    
                <label htmlFor="date-field">Дата:</label>
                            <input type="date" id="date-field" value={this.addDate} onChange={this.handleAddDateChange}/>
                            <label htmlFor="type-field">Тип:</label>
                                <select id="type-field"  onChange={this.handleTypeChange}>
                                <option >Выберите тип</option>
                                <option >Тип 1</option>
                                <option >Тип 2</option>
                                <option >Тип 3</option>
                            </select>                           
                            <label htmlFor="periodicity-field">Периодичность:</label>
                            <input type="text" id="periodicity-field" value={this.selectedPeriodicity} readOnly />
                            <button onClick={this.handleAddActivClick} className='buttons'>Добавить</button>
                     </div>                     
                 </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewComponent);
//trash
/*
<input
                type="text"
                value={"name"}
                onChange={this.handleSaveClick}
              />
*/