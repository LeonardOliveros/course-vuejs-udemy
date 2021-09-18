<template>
    <form @submit.prevent="saveData">
        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" v-model="enteredUsername" />
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" v-model="enteredAge" />
        </div>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    events: ['save'],
    data() {
        return {
            enteredUsername: '',
            enteredAge: 0
        };
    },
    methods: {
        saveData() {
            if (this.enteredUsername != '' && this.enteredAge > 0) {
                this.$emit('save', this.enteredUsername, this.enteredAge);
            }
        }
    }
}
</script>
