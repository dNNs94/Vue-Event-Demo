<template>
  <h1>Create Event</h1>

  <!--<form @submit.prevent="createEvent">-->
  <form @submit.prevent="">
    <label>Select a category</label>
    <select v-model="event.category">
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
    <h3>Name & describe your event</h3>
    <div class="field">
      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Add an event title"
      />
    </div>
    <div class="field">
      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Add a description"
      />
    </div>
    <h3>Where is your event?</h3>
    <div class="field">
      <label>Location</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Add a location"
      />
    </div>
    <h3>When is your event?</h3>
    <div class="field">
      <label>Date</label>
      <datepicker v-model="event.date" placeholder="Select a date" />
    </div>
    <div class="field">
      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>
    </div>
    <div class="tooltip">
      <input
        type="submit"
        class="button -fill-gradient"
        value="Submit"
        disabled
      />
      <span class="tooltiptext"
        >POST functionality disabled in deployed version</span
      >
    </div>
  </form>
</template>

<script>
import Datepicker from 'vue3-datepicker';

export default {
  name: 'EventCreate',

  components: {
    Datepicker
  },

  data() {
    const times = [];

    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00');
    }

    return {
      times,
      categories: this.$store.state.categories,
      event: this.createBlankEventObject()
    };
  },

  methods: {
    createBlankEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      };
    },

    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: this.event.id, title: this.event.title }
          });
          this.event = this.createBlankEventObject();
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: tomato;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
