import Increase from "./components/b1/Increase";
import UserList from "./components/b2/UserList";
import Form from "./components/b3/Form";
import ColorPicker from "./components/b4/ColorPicker";
import Context from "./components/demo/Context";
import Parent from "./components/demo/Parent";
import DemoUseRe from "./components/DemoUseRe";
import InputText from "./components/b5/InputText";
import InputRadio from "./components/b6/InputRadio";
import Todo from "./components/b7/Todo";
import TaskContextProvider from "./components/context/TaskContext";

function App() {
  return (
    <>
      {/* <DemoUseRe/>
      <Context/>
      <Parent/> */}
      {/* <Increase/> */}
      {/* <UserList/> */}
      {/* <Form/> */}
      <TaskContextProvider />
      {/* <ColorPicker/>
      <InputText/>
      <InputRadio/>
      <Todo/> */}
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ToDo List</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .todo-container {\n        max-width: 600px;\n        margin: 50px auto;\n        background: #fff;\n        border-radius: 15px;\n        padding: 20px;\n        border: 1px solid #dadada;\n      }\n    ",
          }}
        />
        <div className="container todo-container">
          <h3 className="text-center mb-3 fw-bold">Danh sách công việc</h3>
          <div className="d-flex mb-1">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Nhập công việc..."
            />
            <button className="btn btn-primary">Thêm</button>
          </div>
          <p className="text-danger error-text mb-3 text-sm fs-6">
            Vui lòng nhập tên công việc!
          </p>
          <ul className="list-group my-3">
            {/* Tasks sẽ được thêm ở đây */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input className="form-check-input me-2" type="checkbox" />
                <span className="task-name">Quét nhà</span>
              </div>
              <div>
                <i className="fas fa-edit text-primary me-3" role="button" />
                <i className="fas fa-trash text-danger" role="button" />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input className="form-check-input me-2" type="checkbox" />
                <s className="task-name">Giặt quần áo</s>
              </div>
              <div>
                <i className="fas fa-edit text-primary me-3" role="button" />
                <i className="fas fa-trash text-danger" role="button" />
              </div>
            </li>
          </ul>
          {/* Hiển thị khi chưa có công việc hoàn thành */}
          {/* <div class="text-center text-danger fw-medium">
  Chưa có công việc nào hoàn thành
</div> */}
          {/* Hiển thị khi tất cả công việc hoàn thành */}
          <div className="text-center text-success fw-medium">
            {/* Tất cả công việc đã hoàn thành */}1 / 2 công việc đã hoàn thành
          </div>
          {/* Hiển thị khi chưa có công việc */}
          {/* <div class="text-center text-warning fw-medium">
  Chưa có công việc nào
</div> */}
        </div>
      </>
    </>
  );
}

export default App;
