// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.26/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(b,c){b.CloudsRenderingStages=void 0;(function(a){a[a.RENDERING=0]="RENDERING";a[a.FINISHED_RENDERING=1]="FINISHED_RENDERING";a[a.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS";a[a.SWITCH_CHANNELS=3]="SWITCH_CHANNELS";a[a.FINISHED=4]="FINISHED"})(b.CloudsRenderingStages||(b.CloudsRenderingStages={}));b.CloudsTextureChannels=void 0;(function(a){a[a.RG=0]="RG";a[a.BA=1]="BA"})(b.CloudsTextureChannels||(b.CloudsTextureChannels={}));b.ensureClouds=
function(a){return c.isSome(a)&&!a.running};b.isReadyCloudsData=function(a){return c.isSome(a)&&c.isSome(a.cubeMap)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});