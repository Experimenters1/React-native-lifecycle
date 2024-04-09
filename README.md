# React-native-lifecycle
## React native lifecycle
![image](https://github.com/Experimenters1/The-basic-structure-of-React-Native/assets/64000769/b50723ae-16c6-4e18-9361-e1182dce6de1) <br><br>

#### Giai đoạn Khởi tạo (Mounting Phase)
Đây là giai đoạn khi component được tạo và đưa vào DOM (hoặc giao diện người dùng gốc trên thiết bị di động trong trường hợp của React Native). Các phương thức vòng đời chính trong giai đoạn này là:  <br><br>
**+)constructor(props):** Đây là phương thức đầu tiên được gọi khi một **component** được tạo. Nó được dùng để khởi tạo **state**, liên kết các phương thức xử lý sự kiện với một thể hiện **(instance) của component.** <br><br>
```typescript
 // Constructor: khởi tạo state và liên kết các phương thức xử lý sự kiện
  constructor(props) {
    super(props);
    this.state = {
      // Khởi tạo trạng thái ban đầu của component
      myState: 'Some state value',
    };
    console.log('Constructor called');
  }
```

**+)static getDerivedStateFromProps(props, state):** Phương thức này được gọi ngay trước khi **render** các **element lên DOM.** Nó cho phép **component** cập nhật state bên trong của nó dựa trên sự thay đổi của props. <br><br>
```typescript
  // getDerivedStateFromProps: cập nhật state dựa trên sự thay đổi của props
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    // Trả về một object để cập nhật state, hoặc null nếu không cần cập nhật
    return null;
  }
```

**+)render():** Phương thức **render** là bắt buộc và chịu trách nhiệm mô tả giao diện sẽ được **render lên DOM.** Đây là phương thức duy nhất được yêu cầu trong một **class component.** <br><br>
```typescript
// render: mô tả giao diện được render
  render() {
    console.log('Render method called');
    return (
      <View>
        <Text>Hello, this is my component!</Text>
      </View>
    );
  }

```

**+)componentDidMount():** Phương thức này được gọi sau khi **component** được gắn vào **DOM (hoặc native view).** Nó được sử dụng để thao tác với **DOM,** thực hiện các yêu cầu mạng và tích hợp với các framework JavaScript khác.<br><br>
```typescript
// componentDidMount: thao tác với DOM, yêu cầu mạng, tích hợp với các framework khác
  componentDidMount() {
    console.log('Component did mount');
    // Đây là nơi thực hiện yêu cầu mạng, thiết lập listeners, v.v.
  }

```
#### Giai đoạn Cập nhật (Updating Phase) 

**+)componentDidUpdate(prevProps, prevState, snapshot):** Được gọi sau khi **component** được cập nhật trong DOM. Hữu ích cho các thao tác DOM và yêu cầu mạng dựa trên state mới. <br><br>

```typescript
  // componentDidUpdate: được gọi sau khi component được cập nhật
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // Thực hiện các thao tác dựa trên việc cập nhật component
  }


```
#### Giai đoạn Dỡ bỏ (Unmounting Phase)  <br><br>

**+)componentWillUnmount():** Phương thức này được gọi ngay trước khi **component** bị dỡ bỏ và hủy. Nó hữu ích cho việc thực hiện các tác vụ dọn dẹp như vô hiệu hóa bộ hẹn giờ, hủy yêu cầu mạng hoặc dọn dẹp bất kỳ đăng ký nào được tạo trong **componentDidMount.** <br><br>

```typescript

  // componentWillUnmount: dọn dẹp trước khi component bị gỡ bỏ
  componentWillUnmount() {
    console.log('Component will unmount');
    // Hủy bỏ yêu cầu mạng, bộ định thời, đăng ký sự kiện, v.v.
  }


```







