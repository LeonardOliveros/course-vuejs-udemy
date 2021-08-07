const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            show: true,
            color: ''
        };
    },
    computed: {
        classes() {
            return {
                user1: this.inputClass == 'user1',
                user2: this.inputClass == 'user2',
                visible: this.show,
                hidden: !this.show
            }
        },
        style() {
            return {
                backgroundColor: this.color
            }
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }
});

app.mount('#assignment');