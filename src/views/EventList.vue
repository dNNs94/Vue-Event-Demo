<template>
  <div class="home">
    <div class="event-container">
      <h1>Events For {{ user.user.name }}</h1>
      <EventCard v-for="event in event.events" :key="event.id" :event="event" />
      <template v-if="shouldDisplayPrevious">
        <router-link
          :to="{ name: 'EventList', query: { page: page - 1 } }"
          rel="prev"
          >Previous Page</router-link
        >
      </template>
      <template v-if="shouldDisplayNext">
        <router-link
          :to="{ name: 'EventList', query: { page: page + 1 } }"
          rel="next"
          >Next Page</router-link
        >
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard';
import { mapState } from 'vuex';

export default {
  name: 'EventList',

  components: {
    EventCard
  },

  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    });
  },

  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },

    shouldDisplayPrevious() {
      return this.page !== 1;
    },

    shouldDisplayNext() {
      return this.event.eventsTotal > this.page * 3;
    },

    ...mapState(['event', 'user'])
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
