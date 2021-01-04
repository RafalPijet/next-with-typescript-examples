// import React from 'react';
// import { NextPage } from 'next';

import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ConnectedTasksList } from "../components/TasksList";
import { reducer } from "../reducer";

// interface InitialProps {
//   greeting: string;
// }

// interface Props extends InitialProps {}

// const IndexPage: NextPage<Props, InitialProps> = props => {
//   return <div>{props.greeting}</div>;
// };

// IndexPage.getInitialProps = async () => ({
//   greeting: 'Hello World!'
// });

// export default IndexPage;

// interface Task {
//   title: string;
// }

// interface TasksListProps {
//   initialTasks: Task[];
// }

// const TasksList2: React.FunctionComponent<TasksListProps> = ({tasks}) => {
//   return (
//     <ul>
//       {tasks.map((task, index) => {
//         return <li key={index}>{task.title}</li>
//       })}
//     </ul>
//   )
// }

// interface TasksListState {
//   tasks: Task[]
// }

// class TasksList extends React.Component<TasksListProps, TasksListState> {
//   constructor(props: TasksListProps) {
//     super(props);
//     this.state = {
//       tasks: props.initialTasks
//     }
//     this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
//   }

//   onAddNewTaskClick() {
//     this.setState({
//       tasks: [...this.state.tasks, {
//         title: 'New tasks'
//       }]
//     })
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.tasks.map((task, index) => {
//           return <li key={index}>{task.title}</li>
//         })}
//         <button onClick={this.onAddNewTaskClick}>Add new task</button>
//       </ul>
//     )
//   }
// }

// const list = [
//   {title: 'First task'},
//   {title: 'Second task'}
// ]

// export default () => <div><TasksList initialTasks={list}/></div>

const store = createStore(reducer);

export default () => (
  <Provider store={store} >
    <ConnectedTasksList/>
  </Provider>  
)
