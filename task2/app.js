const app = Vue.createApp({
    data() {
        return {
            typingText: '',
            confirmText: ''
        };
    },
    methods: {
        showAlert() {
            alert('Hello World!');
        },
        typing(event) {
            this.typingText = event.target.value
        },
        confirm(event) {
            this.confirmText = event.target.value
        }
    }
});

app.mount('#assignment');
