<template>
    <div>
        <active-user
            :username="username"
            :age="age"
        ></active-user>
        <user-data
            @save="saveData"
        ></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            age: 0
        }
    },
    methods: {
        saveData(username, age) {
            this.username = username
            this.age = age
        }
    }
}
</script>
