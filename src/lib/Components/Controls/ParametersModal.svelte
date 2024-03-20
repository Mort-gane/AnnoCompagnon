<script context="module">

  import { writable } from 'svelte/store'
  export let parameters = writable({

  })

</script>
<script>

  import { onMount, onDestroy } from 'svelte'

  export let parametersS = () => {}
  onMount(() => {
    if (localStorage.getItem('parameters')) {
        parameters.set(JSON.parse(localStorage.getItem("parameters")))
    }
    parametersS = parameters.subscribe(n => localStorage.setItem("parameters",JSON.stringify(n)))
  })
  onDestroy(() => {
    parametersS()
  })

  let change = ({ target }) => {
    parameters.update(n => ({
      ...n,
      ...{ 
          display : {
            ...n.display || {}, 
            ...{ roadMenu : target.value } 
          }}
    })) 
  }

</script>

<input type="checkbox" id="parameters" class="modal-toggle" checked/>
<div class="modal" role="dialog">
  <div class="modal-box bg-base-200 p-2">
    <div class="flex">
        <ul class="menu w-36 ">
            <li class="menu-title">Parameters</li>
            <li class="disabled"><a>Account</a></li>
            <li><a class="active">Display</a></li>
            <li class="disabled"><a>Log out</a></li>
        </ul>
        <div class="flex flex-col p-3 gap-4 flex-1 text-lg">
          <label>
              <span class="shrink-0">Road pannel :</span>
              <select on:change={change} value={$parameters?.display?.roadMenu || "right"} class="select select-bordered w-full max-w-xs">
                <option value="left" >Left</option>
                <option value="right">Right</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="floating">Floating</option>
              </select>
          </label>
        </div>
    </div>
  </div>
  <label class="modal-backdrop" for="parameters">Close</label>
</div>