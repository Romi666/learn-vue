new Vue({
    el: '#vue-app',
    data: {
        name: "Ninja",
        website : "https://www.facebook.com/",
        websiteTag : "<a href=https://www.facebook.com/>Web Tag</a>",
        age : 25,
        x : 0,
        y : 0,
    },
    methods:{
        greet: function(event) {
            return 'Good ' + event + ' '+this.name
        },
        Add: function(inc) {
            this.age += inc;
        },
        Subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY 
        }
    }
})