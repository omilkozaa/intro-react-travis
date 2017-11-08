import React, {Component} from 'react';

/*class ShowCounter extends Component
{
    render()
    {
        const {counter , info} = this.props
        return(
            <div>
                <h1>{`${info.first_name} ${info.last_name}`}</h1>
                {`--- ${counter ? counter : '0'} ---`}
            </div>
        );
    }
}*/

const ShowCounter = ({counter,info}) => (
    <div>
        <h1>{`${info.first_name} ${info.last_name}`}</h1>
        {`--- ${counter ? counter : '0'} ---`}
    </div>
)

ShowCounter.defaultProps = {};
export default ShowCounter;