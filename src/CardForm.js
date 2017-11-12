import React, {Component} from 'react';
import Title from './Title';
import './CardForm.css';

export class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftTime: 120
    };
    props.onChangeTimeOver(false);
    debugger
  }

  handleChangeForm = (e) => {
    const { onChangeForm } = this.props;
    onChangeForm(e.target.name, e.target.value)
  }

  componentDidMount() {
    this.id = setInterval(() => {
      const leftTime = Math.max(this.state.leftTime - 1, 0);
      this.setState({leftTime});
      if (leftTime === 0 && this.state.leftTime === 1) {
        this.props.onChangeTimeOver(true);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const {leftTime} = this.state;
    return (
      <div className="card-form">
        <Title>Номер карты</Title>
        <p className="left-time">Осталось {leftTime} секунд</p>
        <input onChange={ this.handleChangeForm } type="text" name="cardNumber"/>
      </div>
    );
  }
}

export default CardForm;
