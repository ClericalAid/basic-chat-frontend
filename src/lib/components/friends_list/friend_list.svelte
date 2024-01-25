<script>
  import FriendCard from "@src/lib/components/friends_list/friend_card.svelte";
</script>

<div class="w-80 h-screen flex flex-col py-2 pr-1 pl-2">
  <div class="flex flex-col h-full w-full items-center rounded-lg bg-stone-800 p-2 pt-7">
    <div class="w-48 h-48 rounded-full bg-red-200 mb-4"></div>
    <FriendCard />
  </div>
</div>
