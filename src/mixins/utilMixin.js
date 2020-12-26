export default {
    methods: {
        parseToInt(val) {
            return typeof val == "number" ? val : parseInt(val);
        },
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        isSmallScreenSize() {
            return this.isMobile() || screen.width <= 480;
        },
        nullOrEmpty(val) {
            return val == undefined || val == null || val.length == 0;
        },
    },
};
