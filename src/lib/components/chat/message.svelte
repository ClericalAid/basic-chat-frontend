<script>
  import { marked } from "marked";
  let value = `
# Large header here
Message with markdown support. Check it out: Some words are *italic*, some are **bold**

Let's see what happens with line breaks now.

And then another one
  `;
  let username = "Username";
</script>

<div class="flex flex-col">
  <div class="flex flex-row gap-2 items-baseline">
    <div class="text-lg">
      <b>{username}</b>
    </div>
    <div class="text-sm text-stone-400">
      Time goes here
    </div>
  </div>
  <div>
    {@html marked(value)}
  </div>
</div>

