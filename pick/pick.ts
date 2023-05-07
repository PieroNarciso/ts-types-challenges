interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<TData, TKey extends keyof TData> = {[k in TKey]: TData[TKey]}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
