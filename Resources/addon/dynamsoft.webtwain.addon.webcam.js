/*! 20230105181553
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: https://www.dynamsoft.com
*
* Copyright 2023, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*
* Module: Webcam
* Version: 18.1
* 
*/
var Dynamsoft=self.Dynamsoft||{};Dynamsoft.DWT=Dynamsoft.DWT||{},Dynamsoft.aryAddonReadyFun=Dynamsoft.aryAddonReadyFun||[],Dynamsoft.AddonReady=Dynamsoft.AddonReady||function(e){Dynamsoft.aryAddonReadyFun.push(e)},Dynamsoft.WebcamVerForActiveX="15.0.0.0625",Dynamsoft.WebcamVerInName="15.0.0.0625",function(){for(var e=[Dynamsoft.DWT],t=0;t<1;t++){var r=e[t];r.EnumDWT_VideoRotateMode={VRM_NONE:0,VRM_90_DEGREES_CLOCKWISE:1,VRM_180_DEGREES_CLOCKWISE:2,VRM_270_DEGREES_CLOCKWISE:3,VRM_FLIP_VERTICAL:4,VRM_FLIP_HORIZONTAL:5},r.EnumDWT_VideoProperty={VP_BRIGHTNESS:0,VP_CONTRAST:1,VP_HUE:2,VP_SATURATION:3,VP_SHARPNESS:4,VP_GAMMA:5,VP_COLORENABLE:6,VP_WHITEBALANCE:7,VP_BACKLIGHTCOMPENSATION:8,VP_GAIN:9},r.EnumDWT_CameraControlProperty={CCP_PAN:0,CCP_TILT:1,CCP_ROLL:2,CCP_ZOOM:3,CCP_EXPOSURE:4,CCP_IRIS:5,CCP_FOCUS:6}}}(),function(){Dynamsoft.Lib.WebcamErrors={InvalidParameter:function(e){e._errorCode=-10001,e._errorString="The parameter is invalid."},VideoNotPlayingWhenCapture:function(e){e._errorCode=-10002,e._errorString="To capture an image, the video must be playing."},VideoNotPlayingWhenGetURL:function(e){e._errorCode=-10003,e._errorString="To get the url for the current frame, the video must be playing."},Success:function(e){e._errorCode=0,e._errorString="Successful."}}}(),function(r){function t(e){var t=this;t._Count=0,t._resultlist=[],t._stwain=e}t.prototype.GetCount=function(){return r.WebcamErrors.Success(this._stwain),this._Count-1},t.prototype.Get=function(e){var t=this;return t._resultlist.length-1<=e||e<0?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(t._stwain,"Get"),""):(r.WebcamErrors.Success(t._stwain),t._resultlist[e])},t.prototype.GetCurrent=function(){var e=this,t=e._resultlist.length;return 0==t?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,"GetCurrent"),""):(r.WebcamErrors.Success(e._stwain),e._resultlist[t-1])},r.NewWebcamValue=function(e){return new t(e)}}(Dynamsoft.Lib),function(t){function r(e){var t=this;t._Count=0,t._resultlist=[],t._stwain=e}r.prototype.GetValue=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),""):(t.WebcamErrors.Success(e._stwain),e._resultlist[0].current)},r.prototype.GetIfAuto=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),!1):(t.WebcamErrors.Success(e._stwain),"true"==e._resultlist[0].auto)},t.NewWebcamSetting=function(e){return new r(e)}}(Dynamsoft.Lib),function(e){function t(e){var t=this;t._Count=0,t._resultlist=[],t._stwain=e}t.prototype.GetMinValue=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),""):e._resultlist[0].min},t.prototype.GetMaxValue=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),""):e._resultlist[0].max},t.prototype.GetSteppingDelta=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),0):e._resultlist[0].step},t.prototype.GetDefaultValue=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),0):e._resultlist[0].defaultValue},t.prototype.GetIfAuto=function(){var e=this;return 0==e._resultlist.length?(Dynamsoft.Lib.Errors.Webcam_InvalidIndex(e._stwain,""),!1):"true"==e._resultlist[0].auto},e.NewWebcamMoreSetting=function(e){return new t(e)}}(Dynamsoft.Lib),Dynamsoft.AddonReady(function(n,e){n.DynamicLoadAddonFuns&&n.DynamicLoadAddonFuns.push(function(r){r._innerSetWebcamValue=function(e){var t=n.NewWebcamValue(r);return e&&n.isArray(e)&&(t._resultlist=e,t._Count=e.length),t},r._innerSetWebcamSetting=function(e){var t=n.NewWebcamSetting(r);return e&&n.isArray(e)&&(t._resultlist=e,t._Count=e.length),t},r._innerSetWebcamMoreSetting=function(e){var t=n.NewWebcamMoreSetting(r);return e&&n.isArray(e)&&(t._resultlist=e,t._Count=e.length),t}}),n.Addon_Events.push("OnFrameCaptured"),n.Addon_Events.push("OnCaptureSuccess"),n.Addon_Events.push("OnCaptureError")}),Dynamsoft.AddonReady(function(l,e){l.product.bHTML5Edition&&l.DynamicLoadAddonFuns&&l.DynamicLoadAddonFuns.push(function(m){var e,d=l.html5.Funs,t=l.env.bMac?"DynamicWebcam_"+Dynamsoft.WebcamVerInName+".dylib":l.env.bLinux?"DynamicWebcam_"+Dynamsoft.WebcamVerInName+".so":m._b64bit?"DynamicWebcamx64_"+Dynamsoft.WebcamVerInName+".dll":"DynamicWebcam_"+Dynamsoft.WebcamVerInName+".dll";if(!m._isMobileMode())try{m._innerSend("GetAddOnVersion",d.makeParams("webcam",t),!0,!1,!1).catch(function(){})}catch(e){}(e=m)._innerWebcamValueFunction=function(e,t){e=this._innerFunRaw(e,t,!1,!1);return this._innerSetWebcamValue(e)},e._innerWebcamSettingFunction=function(e,t){e=this._innerFunRaw(e,t,!1,!1);return this._innerSetWebcamSetting(e)},e._innerWebcamMoreSettingFunction=function(e,t){e=this._innerFunRaw(e,t,!1,!1);return this._innerSetWebcamMoreSetting(e)},e._OnCaptureSuccess=function(e){Dynamsoft.Lib.isFunction(this.__OnCaptureSuccess)&&this.__OnCaptureSuccess()},e._OnCaptureError=function(e){var t=e[1],e=e[2];Dynamsoft.Lib.isFunction(this.__OnCaptureError)&&this.__OnCaptureError(t,e)},e._OnFrameCaptured=function(e){var t,r=this,n=Dynamsoft.Lib;r.__videoPause||(t=(t=r.__videoQuality)||60,r.__videoDest&&r.__videoDest.UpdateVideoContainer(r.GetImageURL(-1,-1,-1,0,t))),n.isFunction(r.__OnFrameCaptured)&&r.__OnFrameCaptured(e)},e={Webcam:{IsModuleInstalled:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.IsModuleInstalled"):""!=e._innerFun("GetAddOnVersion",d.makeParams("webcam",t))},Download:function(e,t,r){var n=m;if(n._resetErr(),n._isMobileMode())return n._mobileNotSupport("Addon.Webcam.Download");Dynamsoft.Lib.cancelFrome=2;function o(){return Dynamsoft.Lib.isFunction(t)&&t(),!0}function i(){return Dynamsoft.Lib.isFunction(r)&&r(m._errorCode,m._errorString),!1}if(!l.License.checkProductKey(m,{Webcam:!0},!0))return i();if(this.IsModuleInstalled())return o();if(!e||""==e)return Dynamsoft.Lib.Errors.Webcam_InvalidRemoteFilename(n),i();if(d.isServerInvalid(n))return i(),!1;Dynamsoft.Lib.showProgress(n,"Download",!0);var a=!0;return n._OnPercentDone([0,-1,"Downloading Webcam Module...","http"]),Dynamsoft.Lib.isFunction(t)||(a=!1),d.loadHttpBlob(n,"get",e,a,function(e){n._OnPercentDone([0,-1,"Loading..."]);n.__LoadImageFromBytesV1(e,100,"",0,a,o,i)},function(){Dynamsoft.Lib.closeProgress(n,"Download"),i()},function(e){var t=0===e.total?100:Math.round(100*e.loaded/e.total);[e.loaded," / ",e.total].join("");n._OnPercentDone([0,t,"","http"])})},GetSourceList:function(){var e,t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.GetSourceList"):l.License.checkProductKey(t,{Webcam:!0},!0)?(e=t._innerFunRaw("GetWebcamSourceList"),0==t.ErrorCode&&e.splice(e.length-1,1),e):[]},SelectSource:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.SelectSource"):!!l.License.checkProductKey(t,{Webcam:!0},!0)&&t._innerFun("SelectWebcam",d.makeParams(e))},CloseSource:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.CloseSource"):(this._clear(),e._innerFun("StopCapture"))},GetFramePartURL:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.GetFramePartURL"):this._isPlaying()?e.GetImageURL(-1,-1,-1,!0,e.__videoQuality):(l.WebcamErrors.VideoNotPlayingWhenGetURL(e),"")},GetFrameURL:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.GetFrameURL"):this._isPlaying()?e.GetImageURL(-1,-1,-1,0,e.__videoQuality):(l.WebcamErrors.VideoNotPlayingWhenGetURL(e),"")},PlayVideo:function(e,t,r,n,o){var i,a,u,s,c=m;return c._resetErr(),c._isMobileMode()?c._mobileNotSupport("Addon.Webcam.PlayVideo"):(i=Dynamsoft.Lib,a=60,u=this,s=function(){return u._clear(),Dynamsoft.Lib.isFunction(o)&&o(m._errorCode,m._errorString),!1},e?l.License.checkProductKey(m,{Webcam:!0},!0)?(c.__videoDest=e,c.__videoDest.ShowVideoContainer(!0),i.isFunction(r)&&(m.__OnFrameCaptured=r),m.__videoPause?(m.__videoPause=!1,l.isFunction(n)&&n()):(m.__videoPause=!1,m.__videoQuality=t?a=(a=+t)<1?60:a:a,m._innerSend("PlayVideo",d.makeParams(!0),!0,n,s)),!0):s():(Dynamsoft.Lib.Errors.ParameterCannotEmpty(m),s()))},PauseVideo:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.PauseVideo"):(this._isPlaying()&&(e.__videoPause=!0),!0)},_clear:function(){var e=m;Dynamsoft.Lib;e.__videoPause=!1,e.__OnFrameCaptured=!1,e.__videoQuality=60,e.__videoDest&&e.__videoDest.ShowVideoContainer(!1),e.__videoDest=!1},_isPlaying:function(){return m.GetIfShowVideoContainer()},StopVideo:function(){var e=m;if(e._resetErr(),e._isMobileMode())return e._mobileNotSupport("Addon.Webcam.StopVideo");this._clear();var t=e._innerFun("PlayVideo",d.makeParams(!1,0));return e._innerFun("StopCapture"),t},CaptureImage:function(e,t){var r,n,o=m;return o._resetErr(),o._isMobileMode()?(o._mobileNotSupport("Addon.Webcam.CaptureImage"),l.isFunction(t)&&t(o._errorCode,o._errorString),!1):l.License.checkProductKey(o,{Webcam:!0},!0)?(r="CaptureImage",n=function(){d.hideMask(r),l.isFunction(t)&&t(o._errorCode,o._errorString)},d.showMask(r),o.__OnCaptureError=n,o._innerSend(r,d.makeParams(!1),!0,function(){d.hideMask(),0==o.ErrorCode?(d.hideMask(r),l.isFunction(e)&&setTimeout(e,0),l.License.isLTS()&&Dynamsoft.DWT.lcvrf(m)):n(o.ErrorCode,o.ErrorString)},n),!0):(l.isFunction(t)&&t(o._errorCode,o._errorString),!1)},GetMediaType:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.GetMediaType"):e._innerWebcamValueFunction("GetMediaType")},SetMediaType:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.SetMediaType"):l.isString(e)?t._innerFun("SetMediaType",d.makeParams(e)):(l.Errors.InvalidValue(t),!1)},GetResolution:function(){var e=m;if(e._resetErr(),e._isMobileMode())return e._mobileNotSupport("Addon.Webcam.GetResolution");e=e._innerWebcamValueFunction("GetResolution");if(e&&e._resultlist){var t,r,n=e._resultlist,o=[],i=[];for(""==(r=0<n.length?n[n.length-1]:r)&&0<n.length&&(r=n[0]),t=0;t<n.length-1;t++){for(var a,u=(a=n[t]).toLowerCase().split("x"),s=(d=c=s=void 0,{value:a,p1:parseInt(u[0]),p2:parseInt(u[1])}),c=o,d=c.length-1;0<=d&&c[d].p1>=s.p1&&!(c[d].p1==s.p1&&c[d].p2<s.p2);)c[d+1]=c[d],d--;c[d+1]=s}for(t=0;t<o.length;t++)a=o[t].value,i.push(a);r&&i.push(r),e._resultlist=i,i=o=null}return e},SetResolution:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.SetResolution"):l.isNumber(e)||l.isString(e)?t._innerFun("SetResolution",d.makeParams(e)):(l.Errors.InvalidValue(t),!1)},GetFrameRate:function(){var e=m;return e._resetErr(),e._isMobileMode()?e._mobileNotSupport("Addon.Webcam.GetFrameRate"):e._innerWebcamValueFunction("GetFrameRate")},SetFrameRate:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.SetFrameRate"):l.isNumber(e)?m._innerFun("SetFrameRate",d.makeParams(e)):(l.Errors.InvalidValue(t),!1)},GetVideoPropertySetting:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.GetVideoPropertySetting"):t._innerWebcamSettingFunction("GetWebcamVideoPropertySetting",d.makeParams(e))},GetVideoPropertyMoreSetting:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.GetVideoPropertyMoreSetting"):t._innerWebcamMoreSettingFunction("GetWebcamVideoPropertyMoreSetting",d.makeParams(e))},SetVideoPropertySetting:function(e,t,r){var n=m;return n._resetErr(),n._isMobileMode()?n._mobileNotSupport("Addon.Webcam.SetVideoPropertySetting"):n._innerFun("SetWebcamVideoPropertySetting",d.makeParams(e,t,r))},SetVideoRotateMode:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.SetVideoRotateMode"):t._innerFun("SetVideoRotateMode",d.makeParams(e))},GetCameraControlPropertySetting:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.GetCameraControlPropertySetting"):t._innerWebcamSettingFunction("GetWebcamCameraControlSetting",d.makeParams(e))},GetCameraControlPropertyMoreSetting:function(e){var t=m;return t._resetErr(),t._isMobileMode()?t._mobileNotSupport("Addon.Webcam.GetCameraControlPropertyMoreSetting"):t._innerWebcamMoreSettingFunction("GetWebcamCameraControlMoreSetting",d.makeParams(e))},SetCameraControlPropertySetting:function(e,t,r){var n=m;return n._resetErr(),n._isMobileMode()?n._mobileNotSupport("Addon.Webcam.SetCameraControlPropertySetting"):n._innerFun("SetWebcamCameraControlPropertySetting",d.makeParams(e,t,r))}}},m.__addon=m.__addon||{},l.mix(m.__addon,e)})}),Dynamsoft.AddonReady(function(_,e){var r;_.product.bActiveXEdition&&_.DynamicLoadAddonFuns&&_.DynamicLoadAddonFuns.push(function(m){var l,e,t;if(!m.getSWebTwain()||!m.getSWebTwain().Addon)return!1;Dynamsoft.navInfoSync.bWin&&(t=!Dynamsoft.navInfo.bOSx64||Dynamsoft.navInfo.bWOW64,r=t?"DynamicWebcam_"+Dynamsoft.WebcamVerForActiveX+".dll":"DynamicWebcamx64_"+Dynamsoft.WebcamVerForActiveX+".dll"),l=m.getSWebTwain();try{l.GetAddOnVersion("webcam",r)}catch(e){}(t=m)._innerRead=function(e){var t;try{t=Dynamsoft.Lib.parse(e)}catch(e){}return t.result},t._innerWebcamValueFunctionPlugin=function(e){e=this._innerRead(e);return this._innerSetWebcamValue(e)},t._innerWebcamSettingFunctionPlugin=function(e){e=this._innerRead(e);return this._innerSetWebcamSetting(e)},t._innerWebcamMoreSettingFunctionPlugin=function(e){e=this._innerRead(e);return this._innerSetWebcamMoreSetting(e)},e={Webcam:{IsModuleInstalled:function(){var e=l.GetAddOnVersion("webcam",r);return _.setErrorString(m),""!=e},Download:function(e,t,r){function n(){return Dynamsoft.Lib.isFunction(t)&&t(),!0}function o(){return Dynamsoft.Lib.isFunction(r)&&r(m._errorCode,m._errorString),!1}return _.License.checkProductKey(m,{Webcam:!0},!0)?this.IsModuleInstalled()?n():e&&""!=e?(e=l.DownloadAddon(e),_.wrapperRet(m,e,n,o)):(Dynamsoft.Lib.Errors.Webcam_InvalidRemoteFilename(m),o()):o()},GetSourceList:function(){var e,t;return _.License.checkProductKey(m,{Webcam:!0},!0)?(e=l.GetWebcamSourceList(),t=[],_.setErrorString(m),0==m._errorCode&&(t=m._innerRead(e))&&1<t.length&&t.splice(t.length-1,1),t):[]},SelectSource:function(e){return!!_.License.checkProductKey(m,{Webcam:!0},!0)&&(e=l.SelectWebcam(e),_.setErrorString(m),e)},CloseSource:function(){m._playVideoDWT=null;var e=l.StopCapture();return _.setErrorString(m),e},GetFramePartURL:function(){var e;return this._isPlaying()?(e=l.GetDIB(-1),_.setErrorString(m),e):(_.WebcamErrors.VideoNotPlayingWhenGetURL(m),"")},GetFrameURL:function(){return""},PlayVideo:function(e,t,r,n,o){function i(){return m._playVideoDWT=null,Dynamsoft.Lib.isFunction(o)&&o(m.ErrorCode,m.ErrorString),!1}var a;return e&&e.getSWebTwain()?_.License.checkProductKey(m,{Webcam:!0},!0)?(a=e.getSWebTwain().CurrentHWND)?(m._playVideoDWT=e,setTimeout(function(){var e=l.RunWebcamCmd("PlayVideo",a,null,null,r);_.wrapperRet(m,e,n,i)},0),!0):(_.WebcamErrors.InvalidParameter(m),i()):i():(Dynamsoft.Lib.WebcamErrors.InvalidParameter(m),i())},PauseVideo:function(){return!0},StopVideo:function(){m._playVideoDWT=null;var e=l.RunWebcamCmd("StopVideo",0,null,null,null);return _.setErrorString(m),l.StopCapture(),e},CaptureImage:function(e,t){function r(){return Dynamsoft.Lib.isFunction(t)&&t(m.ErrorCode,m.ErrorString),!1}var n;return _.License.checkProductKey(m,{Webcam:!0},!0)?(n=l.RunWebcamCmd("Capture",0,function(){_.isFunction(e)&&setTimeout(e,0),_.License.isLTS()&&Dynamsoft.DWT.lcvrf(m)},r,null),_.setErrorString(m),n):r()},GetMediaType:function(){var e=m._innerWebcamValueFunctionPlugin(l.GetMediaType());return _.setErrorString(m),e},SetMediaType:function(e){return _.isString(e)?(e=l.SetMediaType(e),_.setErrorString(m),e):(_.Errors.InvalidValue(m),!1)},GetResolution:function(){var e=m._innerWebcamValueFunctionPlugin(l.GetResolution());if(_.setErrorString(m),e&&e._resultlist){var t,r,n=e._resultlist,o=[],i=[];for(0<n.length&&(r=n[n.length-1]),t=0;t<n.length-1;t++){for(var a,u=(a=n[t]).toLowerCase().split("x"),s=(d=c=s=void 0,{value:a,p1:parseInt(u[0]),p2:parseInt(u[1])}),c=o,d=c.length-1;0<=d&&c[d].p1>=s.p1&&!(c[d].p1==s.p1&&c[d].p2<s.p2);)c[d+1]=c[d],d--;c[d+1]=s}for(t=0;t<o.length;t++)a=o[t].value,i.push(a);r&&i.push(r),e._resultlist=i,i=o=null}return e},SetResolution:function(e){return _.isNumber(e)||_.isString(e)?(e=l.SetResolution(e),_.setErrorString(m),e):(_.Errors.InvalidValue(m),!1)},GetFrameRate:function(){var e=m._innerWebcamValueFunctionPlugin(l.GetFrameRate());return _.setErrorString(m),e},SetFrameRate:function(e){return _.isNumber(e)?(e=l.SetFrameRate(e),_.setErrorString(m),e):(_.Errors.InvalidValue(m),!1)},GetVideoPropertySetting:function(e){e=l.GetWebcamVideoPropertySetting(e);return _.setErrorString(m),m._innerWebcamSettingFunctionPlugin(e)},GetVideoPropertyMoreSetting:function(e){e=l.GetWebcamVideoPropertyMoreSetting(e);return _.setErrorString(m),m._innerWebcamMoreSettingFunctionPlugin(e)},SetVideoPropertySetting:function(e,t,r){e=l.SetWebcamVideoPropertySetting(e,t,r);return _.setErrorString(m),e},SetVideoRotateMode:function(e){e=l.SetVideoRotateMode(e);return _.setErrorString(m),e},GetCameraControlPropertySetting:function(e){e=l.GetWebcamCameraControlSetting(e);return _.setErrorString(m),m._innerWebcamSettingFunctionPlugin(e)},GetCameraControlPropertyMoreSetting:function(e){e=l.GetWebcamCameraControlMoreSetting(e);return _.setErrorString(m),m._innerWebcamMoreSettingFunctionPlugin(e)},SetCameraControlPropertySetting:function(e,t,r){e=l.SetWebcamCameraControlPropertySetting(e,t,r);return _.setErrorString(m),e},_isPlaying:function(){return!!m._playVideoDWT}}},m.Addon=m.Addon||{},_.mix(m.Addon,e)})});