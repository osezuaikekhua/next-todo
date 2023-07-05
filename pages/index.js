import CreateTodo from "@/componets/CreateTodo"
import TodoList from "@/componets/TodoList"




export default function Home() {
  return (
    <>
    <div className="container">
      <TodoList/>
      <CreateTodo/>
    </div>
     
    </>
  )
}
