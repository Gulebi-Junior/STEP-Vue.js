<script>
export default {
    data() {
        return {
            todoList: [],
            newText: "",
        };
    },
    methods: {
        addNewTodo() {
            const newTodo = {
                id: this.todoList.at(-1)?.id + 1 || 1,
                text: this.newText,
                isDone: false,
                isEditing: false,
            };

            this.newText = "";

            this.todoList.push(newTodo);
        },
        toggleDone(id) {
            this.todoList.map((todo) => (todo.id === id ? (todo.isDone = !todo.isDone) : undefined));
        },
    },
};
</script>

<template>
    <div class="container">
        <div id="list-block">
            <div id="add-block">
                <input type="text" v-model="newText" placeholder="Enter Todo" />
                <button @click="addNewTodo()">Add</button>
            </div>
            <ul id="list">
                <li v-for="todo in todoList" :key="todo.id" class="list-item">
                    <span
                        @click="!todo.isEditing && toggleDone(todo.id)"
                        :class="{ done: todo.isDone }"
                        :contenteditable="todo.isEditing"
                    >
                        {{ todo.text }}
                    </span>
                    <button :disabled="todo.isDone" @click="todo.isEditing = !todo.isEditing">
                        {{ !todo.isEditing ? "Change" : "Save" }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
}

#list-block {
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
}

#add-block {
    display: flex;
    gap: 5px;
}

#list {
    padding-left: 30px;
    margin-bottom: 0px;
}

.list-item {
    cursor: pointer;
    user-select: none;
    margin-bottom: 5px;
}

.list-item > span {
    margin-right: 8px;
}

.done {
    text-decoration: line-through;
}
</style>
