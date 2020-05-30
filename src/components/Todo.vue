<template>
  <div class="todo" :class="data.priority">
    <h3>{{data.title}}</h3>
    <p>
      {{data.note}}
    </p>
    <div class="todo-footer">
      <i v-if="data.label === 'personal'" class="fa fa-user fa-lg"></i>
      <i v-else-if="data.label === 'work'" class="fa fa-briefcase fa-lg"></i>
      <i v-else-if="data.label === 'shopping'" class="fa fa-shopping-cart fa-lg"></i>
      <i v-else-if="data.label === 'others'" class="fa fa-th fa-lg"></i>&nbsp;
      
      <span :class="{'striked' : expired}">{{new Date(data.date).toDateString()}}</span>

      <div class="todo-setting">
        <i class="fas fa-wrench fa-lg"></i>
        <div class="tooltip">
          <ul class="tooltip-list">
            <li @click="setNew">New</li>
            <li @click="setProgress">Progress</li>
            <li @click="setCompleted">Completed</li>
            <li @click="deleteTodo">Delete</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Todo',
    props : ['data'],
    methods : {
      setNew(){
        this.data.priority = 'new';
        this.$store.dispatch('updateTodo', {
          _id : this.data._id,
          priority : 'new'
        });
      },

      setProgress(){
        this.data.priority = 'progress';
        this.$store.dispatch('updateTodo', {
          _id : this.data._id,
          priority : 'progress'
        });
      },

      setCompleted(){
        this.data.priority = 'completed';
        this.$store.dispatch('updateTodo', {
          _id : this.data._id,
          priority : 'completed'
        });
      },

      deleteTodo(){
        this.$store.dispatch('deleteTodo', this.data._id);
      }
    },
    data () {
      return {
        expired : false
      }
    },
    created () {
      const temp = new Date();
      const today = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate(), 0, 0);
      if(new Date(this.data.date) <  today)
        this.expired = true;
    }
};
</script>

<style scoped>
.striked {
  text-decoration: line-through;
}
</style>