import React from 'react';

class SearchBar extends React.Component{

    state = { term: ''}


    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form className="form-search ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"  onChange={e => this.setState({term : e.target.value})}/>
                    </div>       
                </form>
            </div>
        )
    }
}

export default SearchBar;
