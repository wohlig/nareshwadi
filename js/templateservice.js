var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    this.headermenu = "views/headermenu.html";
    this.header = "views/header.html";
    this.menu = "views/menu.html";
    this.slider = "views/slider.html";
    this.content = "views/content.html";
    this.footermenu = "views/footermenu.html";
    this.footer = "views/footer.html";
    var d=new Date();
    this.englishactive="active";
    this.marathiactive="";
    this.changelanguage=function(language) {
        if(language=="english")
        {
            this.englishactive="active";
            this.marathiactive="";
        }
        else
        {
            this.englishactive="";
            this.marathiactive="active";
        }
    };
    this.year=d.getFullYear();
});