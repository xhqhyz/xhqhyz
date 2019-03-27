var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/skin_login/login.exml";
        return _this;
    }
    Login.prototype.onComplete = function () {
        this.login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.login_click, this);
        this.freePlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.play_click, this);
    };
    Login.prototype.login_click = function () {
        var username = this.userName.text;
        var password = this.password.text;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        //var link = "https://login.nanhai66.com/web/wap/?username="+username+"&password="+password+"&agentFix=DEV";
        //egret.log(username+"|"+password);
        var link = "https://login.nanhai66.com/web/wap/?username=TEST000000&password=96e79218965eb72c92a549dd5a330112&agentFix=DEV";
        request.open(link, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    };
    Login.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        var data = JSON.parse(request.response);
        if (data.token != '') {
            egret.log("登录成功");
        }
    };
    Login.prototype.onPostIOError = function (event) {
        egret.log("post error : " + event);
    };
    Login.prototype.onPostProgress = function (event) {
    };
    Login.prototype.play_click = function () {
        egret.log("点击了试玩按钮");
    };
    return Login;
}(eui.Component));
__reflect(Login.prototype, "Login");
//# sourceMappingURL=Login.js.map