var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        loginVisible: false,
        signUpVisible: false,
        resume: {
            name:'姓名',
            gender:'女',
            birthday:'2008.8.8',
            jobTitle:'前端工程师',
            phone:'13811111111',
            email:'10086@163.com'
        }
    },
    methods :{
        onEdit(key,value){
            this.resume[key] = value
        },
        onClickSave(){
            let currentUser = AV.User.current()
            if(!currentUser){
                this.loginVisible = true
            }else{
                this.saveResume()
            }
            // let User = AV.Object.extend('User')
            // let user = new User()
            // user.set('resume',this.resume)
            // user.save().then(function (todo) {
            // }, function (error) {
            // })
        },
        saveResume(){

        }
    }
})