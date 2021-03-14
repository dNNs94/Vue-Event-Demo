<template>
  <router-link
    class="event-link"
    v-if="event"
    :to="{ name: 'EventDetails', params: { id: event.id, title: event.title } }"
  >
    <div class="event-card -shadow" v-if="event">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </div>
  </router-link>
</template>

<script>
import BaseIcon from '@/components/BaseIcon';

export default {
  components: {
    BaseIcon
  },

  name: 'EventCard',

  props: {
    event: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  transition: all 0.2s linear;
  margin-bottom: 24px;
}

.event-card:hover {
  transform: scale(1.02);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
