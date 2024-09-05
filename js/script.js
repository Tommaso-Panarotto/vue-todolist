//VUEJS
const { createApp } = Vue

createApp({
    data() {
        return {
            newToDoTask: '',
            toDoList: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'portare il cane a spasso',
                    done: false
                },
                {
                    text: 'pulire casa',
                    done: false
                },
                {
                    text: 'fare i compiti',
                    done: false
                },
                {
                    text: 'fare esercizio fisico',
                    done: false
                },
                {
                    text: 'uscire a cena',
                    done: false
                },
                {
                    text: 'cucinare il pasto',
                    done: false
                },
                {
                    text: 'gonfiare le gomme',
                    done: false
                }
            ],
            doneOfList: []
        }
    },
    methods: {
        addNewTask(content) {
            if (content.length >= 3) {
                this.toDoList.push(content);
                this.clearToDoInput();
            }
        },

    }
}).mount('#app')