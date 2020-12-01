import React, {Component} from 'react';
import './cars.css'

class CarsComponents extends Component {
    render() {
        console.log(this.props);
        let {item,clsName} = this.props;

        return (
            <div className={clsName}>
                <h3>
                    {item.producer}-{item.model}-{item.year}-{item.color}-{item.type}-{item.engine}-{item.volume}-{item.power}
                </h3>
            </div>
        );
    }
}

export default CarsComponents;