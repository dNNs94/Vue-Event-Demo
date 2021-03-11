<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Events For Vue</h1>
    <div class="event-container">
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard";
import EventService from '@/services/EventService'

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
};
</script>

<style scoped>
.event-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
