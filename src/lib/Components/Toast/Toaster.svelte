<script context="module">

    import { writable } from "svelte/store";
    let toastQueue = writable([])
    export let addToast = (text,alertType) => {
        toastQueue.update(n => [...n,...[{text,alertType}]])
    }
    export let alertTypeEnum = {
        info : 'info',
        error : 'error',
        warning : 'warning',
        success : 'success'
    }

</script>

<div class="toast toast-center bottom-10">
    {#each $toastQueue as toast}
        <div
        class:alert-info={toast.alertType === alertTypeEnum.info}
        class:alert-error={toast.alertType === alertTypeEnum.error}
        class:alert-warning={toast.alertType === alertTypeEnum.warning}
        class:alert-success={toast.alertType === alertTypeEnum.success}
        class="alert">
            <span>{toast.text}</span>
        </div>
    {/each}
</div>