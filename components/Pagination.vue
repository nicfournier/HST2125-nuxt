<template>
    <section>
        <b-pagination
            :total="total"
            :current.sync="current"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage">
        </b-pagination>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                total: 200,
                current: 1,
                perPage: 20,
                order: '',
                size: '',
                isSimple: false,
                isRounded: false
            }
        }
    }
</script>