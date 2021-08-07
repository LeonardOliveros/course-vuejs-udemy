const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet';
            } else if (this.number == 37) {
                return this.number;
            }

            return 'Too much!';
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.number = 0;
            }, 5000);
        }
    },
    methods: {
        increase(amount) {
            this.number += amount;
        }
    }
})

app.mount('#assignment');
