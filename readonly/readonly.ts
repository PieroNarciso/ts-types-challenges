interface Todo {
  title: string
  description: string
}

type MyReadonly<TData> = {readonly [ k in keyof TData]: TData[k]}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
