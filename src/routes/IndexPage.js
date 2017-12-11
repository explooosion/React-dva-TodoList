import React from 'react';
import { connect } from 'dva';

import { Button, Input, Layout, List, Checkbox } from 'antd';
import styles from './IndexPage.css';

const { Content } = Layout;

// import { TextField, RaisedButton, Checkbox, FlatButton } from 'material-ui';

// import List, { ListItem } from 'material-ui/List';


class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.dispatch = props.dispatch;
    this.state = {
      item: '',
    };
  }

  render() {
    const props = this.props;

    return (

      <Layout className={styles.layout}>
        <h1>TodoList <small>( Dva + AntD )</small></h1>
        <Content>
          <Input
            value={this.state.item}
            placeholder="請輸入待辦事項"
            onChange={(e) => { this.setState({ item: e.target.value }); }}
          />
          <Button
            type="primary"
            icon="plus"
            disabled={this.state.item === ''}
            onClick={() => {
              props.dispatch({ type: 'example/add', item: { name: this.state.item, status: false } });
              this.setState({ item: '' });
            }}
          >新增</Button>
          <List
            className={styles.list}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item>
                <Checkbox
                  className={(item.status ? styles.check : ' l')}
                  checked={item.status}
                  onChange={(e) => {
                    props.dispatch({ type: 'example/check', index, value: e.target.checked });
                  }}
                >{item.name}</Checkbox>
                <Button
                  className={styles.btndel}
                  type="danger" size="small" shape="circle" icon="cross"
                  onClick={() => {
                    props.dispatch({ type: 'example/delete', index });
                  }}
                />
              </List.Item>
            )}
          />
        </Content>
      </Layout >
    );
  }

}

function mapStateToProps(state) {
  return {
    list: state.example.list,
  };
}

export default connect(mapStateToProps)(IndexPage);
