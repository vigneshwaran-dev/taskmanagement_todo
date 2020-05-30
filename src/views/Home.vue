<template>
  <div class="parent-wrapper">
    <div class="wrapper">
      <TopBar/>

      <GridContainer/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TopBar from '../components/TopBar.vue';
import GridContainer from '../components/GridContainer.vue';

export default {
  name : 'Home',
  components : {
    TopBar,
    GridContainer
  },
  created(){
    if(localStorage.getItem('token') === null)
      this.$router.push('/signin');
    
    axios.get(this.$API+'/user/' + localStorage.getItem('token'))
      .then((user) => {
        this.$store.state.user.name = user.data.name;
        this.$store.state.user.email = user.data.email;
        this.$store.state.user.password = user.data.password;
        this.$store.state.user._id = user.data._id;
        this.$store.state.user.image = user.data.image;
        this.$store.state.user.token = localStorage.getItem('token');
      });
  }
}
</script>