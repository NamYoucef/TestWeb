import "./style.css";
import { CheckOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { List } from "antd";
function Home() {
  const data = [
    {
      title: "Title1 ",
      description: "description1",
      date: "date1",
    },
    {
      title: "Title2",
      description: "description2",
      date: "date2",
    },
    {
      title: "Title3",
      description: "description3",
      date: "date3",
    },
    {
      title: "Title4",
      description: "description4",
      date: "date4",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="title">Todo list</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckOutlined />}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </List.Item>
          )}
        />
        ,
      </div>
    </>
  );
}

export default Home;
