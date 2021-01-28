<template>
  <h2>My contact's list</h2>
  <ul>
    <li>
      <add-friend
        @add-a-friend="addAFriend">
      </add-friend>
    </li>
  </ul>
  <ul>
    <friend-contact 
      v-for="friend in friends "
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
      @delete-contact="deleteContact">
    </friend-contact>
  </ul>
</template>

<script>
// import FriendContact from './components/FriendContact.vue'
  export default {
  // components: { FriendContact },
    data() {
      return {
        friends: [
          {
            id: '1',
            name: 'Hugo',
            phone: '123 456 789',
            email: 'hugo@gmail.pf',
            isFavorite: true
          },
          {
            id: '2',
            name: 'Margaux',
            phone: '876 543 210',
            email: 'margaux@mail.pf',
            isFavorite: false
          }
        ]
      }
    },
    methods: {
      toggleFavoriteStatus(friendId) {
        const identifiedFriend = this.friends.find(friend => friend.id === friendId)
        identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      },
      addAFriend(newContactName, newContactPhone, newContactEmail) {
        this.friends.push(
          {
            id: newContactName, 
            name: newContactName,
            phone: newContactPhone,
            email: newContactEmail
          }
        )
      },
      deleteContact(friendId) {
        this.friends = this.friends.filter(friend => friend.id !== friendId)
      }
    }
  }
</script>