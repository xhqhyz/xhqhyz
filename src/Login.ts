class Login extends eui.Component{
    private login:eui.Button;
    private freePlay:eui.Button;
    private userName:eui.EditableText;
    private password:eui.EditableText;

    constructor() {
        super();
        this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
        this.skinName = "resource/skin_login/login.exml";
    }
    
    private onComplete():void{
        this.login.addEventListener(egret.TouchEvent.TOUCH_TAP,this.login_click,this);
        this.freePlay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.play_click,this);
    }

    private login_click() {
        var username = this.userName.text;
        var password = this.password.text;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        //var link = "https://login.nanhai66.com/web/wap/?username="+username+"&password="+password+"&agentFix=DEV";
        
        //egret.log(username+"|"+password);
        var link = "https://login.nanhai66.com/web/wap/?username=TEST000000&password=96e79218965eb72c92a549dd5a330112&agentFix=DEV";
        request.open(link,egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
    }

    private onPostComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        var data = JSON.parse(request.response);
        
        if(data.token != ''){
            egret.log("登录成功");
        }

    }
    private onPostIOError(event:egret.IOErrorEvent):void {
        egret.log("post error : " + event);
    }
    private onPostProgress(event:egret.ProgressEvent):void {
        
    }
    
    private play_click() {
        egret.log("进入试玩");
    }
}