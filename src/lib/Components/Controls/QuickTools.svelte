<script>

    import { centerGrid } from "../Grid/Grid.svelte";

</script>

<div class="absolute top-2 right-2 flex -space-x-7 hover:space-x-1 opacity-80 hover:opacity-100">
    <div class="tooltip tooltip-bottom tooltip-info" data-tip="Center the grid">
        <button class="btn btn-sm btn-circle" on:click={centerGrid}>
            <i class="fa-solid fa-arrows-to-eye"></i>
        </button>
    </div>
    <div class="tooltip tooltip-bottom tooltip-info" data-tip="Parameters">
        <label class="btn btn-sm btn-circle" for="parameters">
            <i class="fa-solid fa-gears"></i>
        </label>
    </div>
    <div class="tooltip tooltip-bottom tooltip-info" data-tip="Export to file...">
        <button class="btn btn-sm btn-circle">
            <i class="fa-solid fa-download"></i>
        </button>
    </div>
    <div class="tooltip tooltip-bottom tooltip-info" data-tip="Import a file">
        <button class="btn btn-sm btn-circle">
            <i class="fa-solid fa-upload"></i>
        </button>
    </div>
    <div class="tooltip tooltip-bottom tooltip-info" data-tip="Help">
        <button class="btn btn-sm btn-circle">
            <i class="fa-solid fa-question"></i>
        </button>
    </div>
    <div class="tooltip tooltip-bottom" data-tip="">
        <div class="btn btn-sm btn-circle no-animation">
            <i class="fa-solid fa-location-arrow"></i>
        </div>
    </div>
</div>