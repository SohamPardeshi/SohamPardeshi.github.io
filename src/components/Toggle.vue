<template> 
    <div class="flex">
        <div class="mode-toggle" @click="modeToggle" :class="darkDark">
            <div class="toggle">
                <div id="dark-mode" type="checkbox"></div>
            </div>
        </div>
    </div>
</template>

<!-- JS Scripts -->
<script>    
    export default {
        name: "Toggle",
        
        data() {
            return {
                darkMode: false
            }
        },

        methods: {
            dark() {
                document.querySelector('body').classList.add('dark-mode')
                this.darkMode = true
                this.$emit('toggle', 'dark')
            },

            light() {
                document.querySelector('body').classList.remove('dark-mode')
                this.darkMode = false
                this.$emit('toggle', 'light')
            },

            modeToggle() {
                if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                    this.light()
                } else {
                    this.dark()
                }
            },
        },

        computed: {
            darkDark() {
                return this.darkMode && 'darkmode-toggled'
            }
        }, 
        
        mounted() {
            let bodyElement = document.body;
            bodyElement.classList.add("app-background");
            
            // check for active theme
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");

            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark');
                this.dark();
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.light();
            }
        },
        
        watch: {
            darkMode: function () {

                let htmlElement = document.documentElement;
                if (this.darkMode) {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            }
        }
        
    }
</script>

<!-- SCSS Styles -->
<style lang="scss" scoped>
    $dark: #171717;
    $mode-toggle-bg: #363636;

    // _mode-toggle.scss
    .mode-toggle {
        position: relative;
        //margin: auto .5rem .5rem auto;
        padding: 0;
        width: 44px;
        height: 24px;
        min-width: 36px;
        min-height: 20px;
        background-color: $mode-toggle-bg;
        border: 0;
        border-radius: 24px;
        outline: 0;
        overflow: hidden;
        cursor: pointer;
        z-index: 2;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-touch-callout: none;
        appearance: none;
        transition: background-color .5s ease;

        .toggle {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid transparent;
            box-shadow: inset 0 0 0 2px #a5abba;
            overflow: hidden;
            transition: transform .5s ease;

            #dark-mode {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 50%;

                &:before {
                    content: '';
                    position: relative;
                    width: 100%;
                    height: 100%;
                    left: 50%;
                    float: left;
                    background-color: #a5abba;
                    transition: border-radius .5s ease, width .5s ease, height .5s ease, left .5s ease, transform .5s ease;
                }
            }
        }
    }

    body.dark-mode {
        .mode-toggle {
            background-color: lighten($mode-toggle-bg, 5%);

            .toggle {
                transform: translateX(19px);

                #dark-mode {
                    &:before {
                        border-radius: 50%;
                        width: 150%;
                        height: 85%;
                        left: 40%;
                        transform: translate(-10%, -40%), rotate(-35deg);
                    }
                }
            }
        }
    }
</style>