import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
  // Constructor: khởi tạo state và liên kết các phương thức xử lý sự kiện
  constructor(props) {
    super(props);
    this.state = {
      // Khởi tạo trạng thái ban đầu của component
      myState: 'Some state value',
    };
    console.log('Constructor called');
  }

  // getDerivedStateFromProps: cập nhật state dựa trên sự thay đổi của props
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    // Trả về một object để cập nhật state, hoặc null nếu không cần cập nhật
    return null;
  }

  // render: mô tả giao diện được render
  render() {
    console.log('Render method called');
    return (
      <View>
        <Text>Hello, this is my component!</Text>
      </View>
    );
  }

  // componentDidMount: thao tác với DOM, yêu cầu mạng, tích hợp với các framework khác
  componentDidMount() {
    console.log('Component did mount');
    // Đây là nơi thực hiện yêu cầu mạng, thiết lập listeners, v.v.
  }

  // componentWillUnmount: dọn dẹp trước khi component bị gỡ bỏ
  componentWillUnmount() {
    console.log('Component will unmount');
    // Hủy bỏ yêu cầu mạng, bộ định thời, đăng ký sự kiện, v.v.
  }

  // componentDidUpdate: được gọi sau khi component được cập nhật
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // Thực hiện các thao tác dựa trên việc cập nhật component
  }
}

export default MyComponent;
