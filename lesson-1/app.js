new Vue({
    el: '#vue-app',
    data: {
        name: "Ninja",
        website : "https://www.facebook.com/",
        websiteTag : "<a href=https://www.facebook.com/>Web Tag</a>"
    },
    methods:{
        greet: function(event) {
            return 'Good ' + event + ' '+this.name
        }
    }
})