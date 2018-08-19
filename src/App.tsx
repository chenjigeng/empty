import * as React from 'react';
import './App.css';
import Modal from './Component/Modal/Modal';

interface IAppState {
  visible: boolean
}

class App extends React.Component<any, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      visible: true,
    }
  }

  public handleClickBtn = () => {
    console.log('oncancel');
    this.setState({
      visible: !this.state.visible,
    })
  }

  public onOk = () => {
    console.log('okok');
    this.setState({
      visible: !this.state.visible,
    })
  }

  public render() {
    const { visible } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClickBtn}>出现Modal</button>
        <Modal
          visible={visible}
          title="测试"
          onOk={this.onOk}
          onCancel={this.handleClickBtn}
        >
          <p>这是测试的哦</p>
          <p>嘿嘿</p>
        </Modal>
      </div>
    );
  }
}

export default App;
