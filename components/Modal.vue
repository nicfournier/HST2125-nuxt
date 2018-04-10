<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isImageModalActive = true">
            <slot name="button-title"></slot>
        </button>
        
        <b-modal :active.sync="isImageModalActive">
            <p class="">
                <slot name="content"></slot>
            </p>
        </b-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isImageModalActive: false,
                isCardModalActive: false
            }
        }
    }
</script>