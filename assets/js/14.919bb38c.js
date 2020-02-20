(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{219:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gpio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[t._v("#")]),t._v(" GPIO")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/General-purpose_input/output",target:"_blank",rel:"noopener noreferrer"}},[t._v("general-purpose input/output"),e("OutboundLink")],1),t._v(" (GPIO) integration allows you to integrate devices that are directly connected to GPIO pins, for example "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Passive_infrared_sensor",target:"_blank",rel:"noopener noreferrer"}},[t._v("PIR motion sensors"),e("OutboundLink")],1),t._v(". It makes uses of the "),e("a",{attrs:{href:"https://www.kernel.org/doc/Documentation/gpio/sysfs.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPIO Sysfs Interface"),e("OutboundLink")],1),t._v(" and therefore only works on Linux.")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("h3",{attrs:{id:"running-with-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-with-nodejs"}},[t._v("#")]),t._v(" Running with NodeJS")]),t._v(" "),e("p",[t._v("The user under which room-assistant is running needs to have access to the GPIO pins. Under Raspbian this can be granted by adding the user to the "),e("code",[t._v("gpio")]),t._v(" group:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" adduser "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v(" gpio\n")])])]),e("h3",{attrs:{id:"running-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-with-docker"}},[t._v("#")]),t._v(" Running with Docker")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("/sys")]),t._v(" folder of the host needs to be mapped into the container like shown below.")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example docker-compose.yml")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("room-assistant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mkerix/room"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("assistant\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" host\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/dbus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/dbus\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /sys"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/sys\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("NODE_CONFIG")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n        {\n          "global": {\n            "instanceName": "changeme",\n            "integrations": ["gpio"]\n          },\n          "gpio": {\n            "binarySensors": [\n              { "name": "PIR Sensor", "pin": 17 }\n            ]\n          }\n        }')]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("binarySensors")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#binary-sensors"}},[t._v("GPIO Binary Sensors")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Array of binary sensor configurations.")])])])]),t._v(" "),e("h3",{attrs:{id:"binary-sensors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binary-sensors"}},[t._v("#")]),t._v(" Binary Sensors")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Friendly name for this sensor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pin")])]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Number of the GPIO pin that should be tracked.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("deviceClass")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Home Assistant "),e("a",{attrs:{href:"https://www.home-assistant.io/integrations/binary_sensor/#device-class",target:"_blank",rel:"noopener noreferrer"}},[t._v("device class"),e("OutboundLink")],1),t._v(" that the sensor should be shown as.")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example Config")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gpio\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gpio")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binarySensors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bedroom Motion Sensor\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deviceClass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" motion\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);