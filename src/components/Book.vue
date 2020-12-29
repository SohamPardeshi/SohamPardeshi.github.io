<template>
    <div class="book">
        <figure class="image is-128x128" ref="image">
            <img :src="image">
        </figure>
        <div id="tooltip" role="tooltip" ref="tooltip">
            {{ name }} <br/> by {{ author }}
            <div id="arrow" data-popper-arrow></div>
        </div>
    </div>

</template>

<!-- JS Scripts -->
<script>
    import { createPopper } from '@popperjs/core';
    
    export default {
        name: "Audible",
        data: () => {
            return {
                popperInstance: null,
            }  
        },
        props: {
            name: String,
            author: String,
            description: String,
            image: String
        },
        mounted() {
            let button = this.$refs.image;
            let tooltip = this.$refs.tooltip;
            
            this.popperInstance = createPopper(button, tooltip, {
                placement: 'top',
                modifiers: [{
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                }],
            });
            
            function show() {
                tooltip.setAttribute('data-show', '');
            }

            function hide() {
                tooltip.removeAttribute('data-show');
            }

            const showEvents = ['mouseenter', 'focus'];
            const hideEvents = ['mouseleave', 'blur'];

            showEvents.forEach(event => {
                button.addEventListener(event, show);
            });

            hideEvents.forEach(event => {
                button.addEventListener(event, hide);
            });
        },
        
        beforeDestroy() {
            if (this.popperInstance) {
                this.popperInstance.destroy();
                this.popperInstance = null;
            }
        }
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    .book {
        margin: 5px 6px;
    }
    
    img {
        opacity: 0.7;
        transition: opacity 0.2s;
        -webkit-transition: opacity 0.2s;
        
        &:hover {
            opacity: 1;
        }
    }
    
    #arrow,
    #arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      z-index: -1;
    }

    #arrow::before {
      content: '';
      transform: rotate(45deg);
      background: #333;
    }
    
    #tooltip {
        background: #333;
        color: white;

        padding: 4px 8px;
        font-size: 13px;
        border-radius: 4px;
        
        visibility: hidden;
        &[data-show]{
            visibility: visible;
        }
    }
    
    
</style>