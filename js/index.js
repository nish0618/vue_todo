new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function (event) {
            this.newItem = this.newItem.trim();
            // 未入力の場合、todoリストに追加しない
            if (this.newItem == '') return;
            var todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo);
            this.newItem = ''
        },
        deleteItem: function (index) {
            this.todos.splice(index, 1);
        }
    }
})
