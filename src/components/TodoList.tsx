import { useAppSelector } from "../store"

export function TodoList(){
	const todo = useAppSelector(store => {
		return store.todo
	})
	console.log(todo)
	return(
		<ul>
			{ todo.map((todo)=> <li key={todo}>{todo}</li>)}
		</ul>
	)
}