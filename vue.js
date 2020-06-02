var mian = new Vue({
    el: "#todolist",
    data: {
        isShowInputTable: false,
        linkStaus: 0,


        list: [],
        inputTale: {
            titleText: "",
            date: "",
            time: "",
            commentText: "",
            starStatus: false,
            checkStatus: false,
            penStatus: false,

        },
    },
    methods: {
        add: function () {
            this.list.push({
                id: Date.now(),
                ...this.inputTale
                // titleText: this.inputTale.titleText,
                // date: this.inputTale.date,
                // time: this.inputTale.time,
                // commentText: this.inputTale.commentText,
                // starStatus: this.inputTale.starStatus,
                // checkStatus: this.inputTale.checkStatus,
                // penStatus: this.inputTale.penStatus,

            });

            this.inputTale = this.initInputTale();
            console.table(this.inputTale);
        },


        remove: function (item) {
            let index = this.list.indexOf(item);
            if (confirm('你確定刪除這筆資料嗎？')) {
                this.list.splice(index, 1);
                this.list = [...this.list];
                console.table(this.list);
            }

        },

        initInputTale: function () {
            return {
                titleText: "",
                date: "",
                time: "",
                commentText: "",
                starStatus: false,
                checkStatus: false,
                penStatus: false,
            }

        },

    }, computed: {
        sorting: function () {
            let arrayOfComplete = this.list.filter(function (data) {
                return data.checkStatus;

            });
            let arrayOfProcess = this.list.filter(function (data) {
                return !data.checkStatus;
            });

            let arrayOfStar = arrayOfProcess.filter(function (data) {
                return data.starStatus;
            });

            let arrayOfNoStar = arrayOfProcess.filter(function (data) {
                return !data.starStatus
            });
            if (this.linkStaus === 0) {
                return [...arrayOfStar, ...arrayOfNoStar, ...arrayOfComplete];
            }
            else if (this.linkStaus === 1) {
                return [...arrayOfStar, ...arrayOfNoStar];
            }
            else if (this.linkStaus === 2) {
                return [...arrayOfComplete];
            }
        },




    }

})