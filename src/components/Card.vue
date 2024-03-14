<template>
    <div class="card">
        <div class="card-Img">
            <slot name="CardImg"></slot>
        </div>
    </div>
    <div class="card">
            <slot name="cardHeader"></slot>
            <slot name="cardBody"></slot>
    </div>
</template>

<script>
export default {
    name: 'CardVue'
}
</script>

<style scoped></style>