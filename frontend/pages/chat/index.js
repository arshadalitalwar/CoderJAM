import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Home from "./chat"
import { BsFillChatDotsFill } from "react-icons/bs";
import styles from "./chat.module.css"

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.showModal} className={styles.chatButton}>
            <BsFillChatDotsFill className="headerIcon" />
        </button>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{style:{display:'none'}}}
          cancelButtonProps={{style:{display:'none'}}}
        >
          <Home/>
        </Modal>
      </>
    );
  }
}

export default App