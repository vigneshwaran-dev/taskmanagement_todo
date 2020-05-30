<template>
  <div class="side-bar">
    <div class="avatar-details">
      <div class="img-border">
        <img
          :src="$API+'/'+$store.state.user.image"
          class="profile-img"
          @click="profile = true"
        />
        <UserProfile @close="profile = false" v-show="profile" />
      </div>

      <h2>{{$store.state.user.name}}</h2>
    </div>

    <div class="calendar">
      <div class="date-filter">
        <i class="fas fa-undo-alt fa-lg tooltip" @click="resetRange">
          <span class="tooltip-text">Reset time filter</span>
        </i>
        
        <i class="fas fa-check fa-lg tooltip" @click="setRange">
          <span class="tooltip-text">Set time filter</span>
        </i>
      </div>

      <v-date-picker
        :value="null"
        mode="range"
        v-model="dates"
        color="yellow"
        is-inline
        title-position="left"
        class="no-border"
      />
    </div>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue';

export default {
  name: 'SideBar',
  components : {
    UserProfile
  },
  data() {
    return {
      dates : {
        start : null,
        end : null
      },
      profile : false
    }
  },
  methods : {
    resetRange() {
      this.$store.state.todo.startDate = this.$store.state.todo.endDate = null;
      this.dates.start = this.dates.end = null;
      this.$store.dispatch('fetchTodos');
    },

    setRange() {
      this.$store.state.todo.startDate = this.dates.start;
      this.$store.state.todo.endDate = this.dates.end;
      this.$store.dispatch('fetchTodos');
    }
  }
};
</script>

<style scoped>
.no-border {
  border: unset;
}

.date-filter .tooltip {
  cursor: pointer;
  color: #a0aec0;
  text-indent: 2em;
  margin-right: 2em;
  text-align: center;
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-text {
  visibility: hidden;
  font-size: 14px;
  width: 120px;
  background: darkgray;
  color: white;
  text-align: center;
  border-radius: 8px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.5s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
