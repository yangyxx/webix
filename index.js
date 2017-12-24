define(["echarts",'lib/webix/webix'],function(echarts){
     // 基于准备好的dom，初始化echarts实例

    console.log(webix);

    webix.ui({
        container:"ix1",
        view:"form", scroll:false, width:320, elements:[
            { view:"datepicker", label:"Start date", name:"start", stringResult:true }
        ]
    });
    var small_film_set = [
        { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
        { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"},
        { id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3, category:"Crime"},
        { id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4, category:"Western"},
        { id:5, title:"Pulp fiction", year:1994, votes:533848, rating:8.9, rank:5, category:"Crime"},
        { id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6, category:"Western"}
    ];
    webix.ready(function(){
        grid = webix.ui({
            container:"ix2",
            rows:[
                {
                    view: "form",
                    css: "toolbar",
                    paddingY: 5,
                    paddingX: 10,
                    cols:[
                        {
                            view: "label", label: "Export"
                        },
                        {
                            view: "button", label: "All Fields", width: 95, click:function(){
                            webix.toExcel($$("table"));
                        }
                        },
                        {
                            view: "button", label: "'Rank' and 'Title'", width: 140, click:function(){
                            webix.toExcel($$("table"), {
                                filename: "table",
                                name: "Films",
                                columns:{
                                    "rank":{header: "Rank", width: 50},
                                    "title":{header: "Title", width: 200}
                                }
                            });
                        }
                        }
                    ]

                },
                {
                    view:"datatable",
                    id: "table",
                    columns:[
                        { id:"ranks",	header:"ranks", 	width:50},
                        { id:"rank",	header:[{
                            text:"Second line",  colspan:5
                        },"rank"], width:50,	sort:"int"},
                        { id:"title",	header:[null,"Film title"],	width:200,	sort:"string"},
                        { id:"year",	header:[null,"Released"],	width:80,	sort:"int"},
                        { id:"votes",	header:[null,"Votes"], 		width:100,	sort:"int"},
                        { id:"",	header:[null,""], 		width:0.1},

                    ],
                    autoheight:true,
                    autowidth:true,
                    data:small_film_set
                },
            ]
        });
    });
    /*grid = webix.ui({
        container:"ix2",
        view:"datatable",
        columns:[
            { id:"ranks",	header:"ranks", 	width:50},
            { id:"rank",	header:[{
                text:"Second line",  colspan:5
            },"rank"], width:50,	sort:"int"},
            { id:"title",	header:[null,"Film title"],	width:200,	sort:"string"},
            { id:"year",	header:[null,"Released"],	width:80,	sort:"int"},
            { id:"votes",	header:[null,"Votes"], 		width:100,	sort:"int"},
            { id:"",	header:[null,""], 		width:0.1},
        ],
        autoheight:true,
        autowidth:true,
        data:small_film_set
    });*/

})