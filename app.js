Vue.component('greetings', {
    template: '<p>Hello I am {{name}} <button v-on:click="changedName">Change Name</button></p>',
    data: function () {
        return {
            name: 'Niloy'
        }
    },
    methods: {
        changedName: function () {
            this.name = 'Joya'
        }
    }
});


new Vue({
    el: '#vue-one',
    data: {
        output: 'Name'
    },
    methods: {
        getName: function () {
            // console.log(this.$refs);
            this.output = this.$refs.name.value;
        }
    }
});

new Vue({
    el: '#vue-two'
})