const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            showList: true
        }
    },
    methods: {
        addTask() {
            if (this.inputTask != '') {
                this.tasks.push(this.inputTask);
                this.inputTask = '';
            }
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount("#assignment");