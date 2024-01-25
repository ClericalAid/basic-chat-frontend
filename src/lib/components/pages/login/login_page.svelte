<script>
  import { goto } from "$app/navigation";
  let username = '';

  function login(){
    goto("/chat");
  }
</script>

<div class="flex flex-row h-screen w-screen items-center justify-center">
  <div class="flex flex-col w-96 h-[450px] bg-brown-800 items-center justify-center rounded-lg">
    <div class="flex justify-center items-center">
      <div class="flex flex-col w-full text-stone-200 items-center justify-center">
        <div class="w-fit text-2xl pb-3">
          <b>Enter Username</b>
        </div>
        <div class="pb-3">
          <input bind:value={username} class="bg-brown-950 w-80 rounded-md h-10"/>
        </div>
        <button on:click={login} class="bg-rose-300 h-11 w-80 text-lg text-brown-900 rounded-md hover:bg-rose-200 active:bg-rose-100">
          Login
        </button>
      </div>
    </div>
  </div>
</div>
