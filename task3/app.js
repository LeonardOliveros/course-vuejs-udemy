const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    watch: {
        number(value) {
            if (value > 37) {
                setTimeout(() => {
                    this.number = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.number <= 37) {
                return 'Not there yet';
            }

            return 'Too much!';
        }
    },
    methods: {
        increase(amount) {
            this.number += amount;
        }
    }
})

app.mount('#assignment');
