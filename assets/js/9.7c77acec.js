(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("room-assistant can be configured using YAML and JSON files. It will look for them in the "),e("code",[t._v("config")]),t._v(" subdirectory of the current working directory. The files in the config folder are loaded according to a "),e("a",{attrs:{href:"https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order",target:"_blank",rel:"noopener noreferrer"}},[t._v("specific order"),e("OutboundLink")],1),t._v(" and then merged into a single configuration. In most cases you should only need a single file called "),e("code",[t._v("local.yml")]),t._v(" or "),e("code",[t._v("local.json")]),t._v(" in the config folder though.")]),t._v(" "),e("p",[t._v("For example, let's say you are launching room-assistant from the directory "),e("code",[t._v("/home/pi/room-assistant")]),t._v(". In this case you should create a file "),e("code",[t._v("/home/pi/room-assistant/config/local.yml")]),t._v(" and put your configuration in there.")]),t._v(" "),e("p",[t._v("You can find the global configuration options below and the ones specific to some integrations on their "),e("RouterLink",{attrs:{to:"/integrations/"}},[t._v("respective pages")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"configuring-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-with-docker"}},[t._v("#")]),t._v(" Configuring with Docker")]),t._v(" "),e("p",[t._v("The official "),e("a",{attrs:{href:"https://hub.docker.com/r/mkerix/room-assistant/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker image"),e("OutboundLink")],1),t._v(" can be configured in two different ways. You can either mount your local config folder into the container as "),e("code",[t._v("/room-assistant/config")]),t._v(" or you can provide the configuration as JSON through an environment variable.")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example docker-compose.yml")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("room-assistant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mkerix/room"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("assistant\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/dbus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/dbus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("NODE_CONFIG")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n        {\n          "global": {\n            "instanceName": "living-room",\n            "integrations": ["homeAssistant", "bluetoothClassic"]\n          }\n        }')]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"core-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#core-settings"}},[t._v("#")]),t._v(" Core Settings")]),t._v(" "),e("p",[e("strong",[t._v("Config Key:")]),t._v(" "),e("code",[t._v("global")])]),t._v(" "),e("p",[t._v("room-assistant exposes a few settings that affect the overall behavior of the application.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("instanceName")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("Hostname")]),t._v(" "),e("td",[t._v("The name of the room-assistant instance. May be used as state for some sensors. Put something in")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("integrations")])]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The integrations that should be loaded on this instance, denoted as camelCase.")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example Config")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bedroom\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bluetoothLowEnergy\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" homeAssistant\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);