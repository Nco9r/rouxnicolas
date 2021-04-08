<template>
    <div class="vue-lerp-element">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "VueLerpElement",
        props: {
            transitionDuration: {
                default: "0.1",
                type: String
            },
            easing: {
                default: "ease-out",
                type: String
            },
            followOffset: {
                default: 1,
                type: Number
            }
        },
        data() {
            return {
                x: 0,
                y: 0,
                initialOffset: {},
            }
        },
        methods: {
            onMouseMove(e) {
                var tilt = this.$el.getBoundingClientRect();
                this.x = e.clientX - this.initialOffset.left - tilt.width / 2;
                this.y = e.clientY - this.initialOffset.top - tilt.height / 2;
            },
            onScroll(e) {
                var tilt = this.$el.getBoundingClientRect();
                this.x = e.clientX - this.initialOffset.left - tilt.width / 2;
                this.y = e.clientY - this.initialOffset.top - tilt.height / 2;
            },
            loop() {
                const el = this.$el;
                const style = window.getComputedStyle(el);
                let top = style.getPropertyValue('top');
                top = top.substring(0, top.length - 2);
                let left = style.getPropertyValue('left');
                left = left.substring(0, left.length - 2);
                el.style.left = parseFloat((this.x) * this.followOffset) + "px";
                el.style.top = parseFloat((this.y) * this.followOffset) + "px";
                requestAnimationFrame(this.loop);
            }
        },
        mounted() {
            const el = this.$el;
            el.style.transition = `
                top ${this.transitionDuration}s ${this.easing},
                left ${this.transitionDuration}s ${this.easing}`;
            const elBoundingClientRect = this.$el.getBoundingClientRect();
            this.initialOffset = {
                top: elBoundingClientRect.top,
                left: elBoundingClientRect.left
            };
            window.addEventListener('mousemove', this.onMouseMove);
            this.loop();
        },
    }
</script>

<style>
    .vue-lerp-element {
        display: inline-block;
        position: relative;
        z-index: 100;
        width: 20px; 
        height: 20px;
        border-radius: 50%;
        border: 1px solid var(--rouge);
        padding: 20px;
        background-color: transparent;
        pointer-events: none;
        height: 100%;
    }
</style>